import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class JSONPointCloudViewer {
    constructor(container, options = {}) {
        // Validate container
        if (!container) {
            throw new Error('Container element is required');
        }
        
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.particles = null;
        this.pointCloudData = null;
        this.particleTexture = this.createParticleTexture();
        this.animationId = null;

        // Settings with options override
        this.settings = {
            particleSize: options.particleSize || 0.1,
            particleColor: options.particleColor || '#372CD5',
            backgroundColor: options.backgroundColor || '#ffffff'
        };

        // JSON URL from options
        this.jsonUrl = options.jsonUrl || options.url || 'https://gmxkwskcrqq1xoty.public.blob.vercel-storage.com/particle-cloud-turbine-246000pts.json';

        // Log the configuration for debugging
        console.log('Point Cloud Viewer Configuration:', {
            jsonUrl: this.jsonUrl,
            particleColor: this.settings.particleColor,
            backgroundColor: this.settings.backgroundColor,
            particleSize: this.settings.particleSize
        });

        this.init();
    }

    init() {
        // Get container dimensions
        const rect = this.container.getBoundingClientRect();
        const width = rect.width || 800;
        const height = rect.height || 600;

        // Setup camera
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 8000);
        this.camera.position.set(5, 5, 5);
        this.camera.lookAt(0, 0, 0);

        // Setup renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(new THREE.Color(this.settings.backgroundColor));
        
        // Clear container and append renderer
        this.container.innerHTML = '';
        this.container.appendChild(this.renderer.domElement);

        // Setup orbit controls (disable zoom)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = true;
        this.controls.enableZoom = false; // Disable zooming
        this.controls.update();

        // Setup lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.1);
        this.scene.add(ambientLight);

        // Setup resize observer for responsive behavior
        this.setupResizeObserver();

        // Load the point cloud from URL
        this.loadJSONPointCloudFromURL();

        // Start render loop
        this.animate();
    }

    setupResizeObserver() {
        if (typeof ResizeObserver !== 'undefined') {
            this.resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    const { width, height } = entry.contentRect;
                    if (width > 0 && height > 0) {
                        this.handleResize(width, height);
                    }
                }
            });
            this.resizeObserver.observe(this.container);
        } else {
            // Fallback for older browsers
            window.addEventListener('resize', () => {
                const rect = this.container.getBoundingClientRect();
                this.handleResize(rect.width, rect.height);
            });
        }
    }

    handleResize(width, height) {
        if (this.camera && this.renderer) {
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        }
    }

    createParticleTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        context.beginPath();
        context.arc(32, 32, 32, 0, 2 * Math.PI, false);
        context.fillStyle = 'white';
        context.fill();

        return new THREE.CanvasTexture(canvas);
    }

    async loadJSONPointCloudFromURL() {
        try {
            const response = await fetch(this.jsonUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();
            this.processPointCloud(jsonData);
            
            console.log('Point cloud loaded successfully!');
        } catch (err) {
            console.error('Error loading point cloud:', err);
            this.showError('Failed to load point cloud data');
        }
    }

    processPointCloud(jsonData) {
        // Clear existing particles
        if (this.particles) {
            this.scene.remove(this.particles);
        }

        // Store the data
        this.pointCloudData = jsonData;

        // Create Three.js point cloud from JSON data
        this.particles = this.loadPointCloudFromJSON(jsonData);
        
        if (this.particles) {
            this.scene.add(this.particles);
            this.fitCameraToPointCloud();
        } else {
            throw new Error('Could not create point cloud from data');
        }
    }

    loadPointCloudFromJSON(jsonData) {
        const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
        
        // Validate JSON structure
        if (!data.particles || !data.metadata) {
            console.error('Invalid JSON format: missing particles or metadata');
            return null;
        }

        const particles = data.particles;
        const quantizationFactor = data.metadata.quantizationFactor || 1;
        const originalModelSize = data.metadata.originalModelSize || 1;
        
        const positions = new Float32Array(particles.length * 3);
        
        particles.forEach((point, i) => {
            positions[i * 3] = point[0] / quantizationFactor;
            positions[i * 3 + 1] = point[1] / quantizationFactor;
            positions[i * 3 + 2] = point[2] / quantizationFactor;
        });
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        // Use settings particle size
        const baseSize = this.settings.particleSize * (originalModelSize / 100);
        
        const material = new THREE.PointsMaterial({
            color: new THREE.Color(this.settings.particleColor),
            size: baseSize,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8,
            map: this.particleTexture,
            alphaTest: 0.5
        });
        
        return new THREE.Points(geometry, material);
    }

    fitCameraToPointCloud() {
        if (!this.particles) return;
        
        // Check if we have saved camera data in the point cloud metadata
        if (this.pointCloudData && this.pointCloudData.metadata && this.pointCloudData.metadata.camera) {
            const cameraData = this.pointCloudData.metadata.camera;
            
            // Apply saved camera settings
            if (cameraData.fov) this.camera.fov = cameraData.fov;
            if (cameraData.near) this.camera.near = cameraData.near;
            if (cameraData.far) this.camera.far = cameraData.far;
            this.camera.updateProjectionMatrix();
            
            // Restore camera position using saved target and spherical coordinates
            const target = new THREE.Vector3(
                cameraData.target.x,
                cameraData.target.y,
                cameraData.target.z
            );
            
            // Calculate camera position from spherical coordinates
            const spherical = new THREE.Spherical(
                cameraData.distance,
                cameraData.spherical.phi,
                cameraData.spherical.theta
            );
            
            const cameraPosition = new THREE.Vector3();
            cameraPosition.setFromSpherical(spherical);
            cameraPosition.add(target);
            
            this.camera.position.copy(cameraPosition);
            this.camera.lookAt(target);
            
            if (this.controls) {
                this.controls.target.copy(target);
                this.controls.update();
            }
            
            console.log('Camera position restored from saved data');
            return;
        }
        
        // Fallback: Calculate bounding box and auto-fit
        this.particles.geometry.computeBoundingBox();
        const box = this.particles.geometry.boundingBox;
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        const maxSize = Math.max(size.x, size.y, size.z);
        const fitHeightDistance = maxSize / (2 * Math.atan(Math.PI * this.camera.fov / 360));
        const fitWidthDistance = fitHeightDistance / this.camera.aspect;
        const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance);
        
        // Position camera
        const direction = new THREE.Vector3(1, 1, 1).normalize().multiplyScalar(distance);
        this.camera.position.copy(center).add(direction);
        
        if (this.controls) {
            this.controls.target.copy(center);
            this.controls.update();
        }
        
        console.log('Camera auto-fitted to point cloud');
    }

    showError(message) {
        this.container.innerHTML = `
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                color: #ff6b6b;
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 20px;
            ">
                <div>
                    <div style="font-size: 48px; margin-bottom: 16px;">⚠️</div>
                    <div style="font-size: 16px;">${message}</div>
                </div>
            </div>
        `;
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        if (this.controls) {
            this.controls.update();
        }
        
        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    // Public method to update settings
    updateSettings(newSettings) {
        Object.assign(this.settings, newSettings);
        
        // Update background color
        if (newSettings.backgroundColor && this.renderer) {
            this.renderer.setClearColor(new THREE.Color(newSettings.backgroundColor));
        }
        
        // Update particle color
        if (newSettings.particleColor && this.particles) {
            this.particles.material.color.set(newSettings.particleColor);
        }
        
        // Update particle size
        if (newSettings.particleSize && this.particles && this.pointCloudData) {
            const originalModelSize = this.pointCloudData.metadata.originalModelSize || 1;
            const newSize = newSettings.particleSize * (originalModelSize / 100);
            this.particles.material.size = newSize;
        }
    }

    // Public method to load new JSON data
    async loadNewData(jsonUrl) {
        this.jsonUrl = jsonUrl;
        await this.loadJSONPointCloudFromURL();
    }

    // Cleanup method for proper disposal
    destroy() {
        // Stop animation loop
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }

        // Dispose of Three.js objects
        if (this.particles) {
            this.particles.geometry.dispose();
            this.particles.material.dispose();
            this.scene.remove(this.particles);
        }

        if (this.particleTexture) {
            this.particleTexture.dispose();
        }

        if (this.renderer) {
            this.renderer.dispose();
            if (this.container && this.renderer.domElement.parentNode === this.container) {
                this.container.removeChild(this.renderer.domElement);
            }
        }

        // Clean up resize observer
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }

        // Clear container
        if (this.container) {
            this.container.innerHTML = '';
        }

        console.log('JSONPointCloudViewer destroyed');
    }
}

// For local development - auto-instantiate if there's a #point-cloud-container
if (typeof window !== 'undefined' && document.getElementById('point-cloud-container')) {
    window.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('point-cloud-container');
        if (container) {
            new JSONPointCloudViewer(container);
        }
    });
}