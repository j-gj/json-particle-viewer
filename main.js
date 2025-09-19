import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class JSONPointCloudViewer {
    constructor(containerElement, options = {
        particleSize: 0.1,
        particleColor: '#372CD5',
        backgroundColor: '#ffffff',
        autoRotate: true,
        rotationSpeed: 0.1,
        url: 'https://gmxkwskcrqq1xoty.public.blob.vercel-storage.com/particle-cloud-turbine-344000pts.json'
    }) {
        this.container = containerElement; // Accept container element directly
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 8000); // Will be updated in init
        this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
        this.controls = null;
        this.particles = null;
        this.pointCloudData = null;
        this.particleTexture = this.createParticleTexture();
        this.animationId = null;
        this.resizeObserver = null;

        this.settings = {
            particleSize: options.particleSize,
            particleColor: options.particleColor,
            backgroundColor: options.backgroundColor,
            autoRotate: options.autoRotate,
            rotationSpeed: options.rotationSpeed
        };

        this.jsonUrl = options.url;

        console.log('Point Cloud Viewer Configuration:', {
            jsonUrl: this.jsonUrl,
            particleColor: this.settings.particleColor,
            backgroundColor: this.settings.backgroundColor
        });

        this.init();
    }

    init() {
        if (!this.container) {
            console.error('Container element is required');
            return;
        }

        // Get container dimensions
        const rect = this.container.getBoundingClientRect();
        const width = rect.width || 800;
        const height = rect.height || 600;

        // Setup renderer
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(new THREE.Color(this.settings.backgroundColor));
        this.container.appendChild(this.renderer.domElement);

        // Setup camera with correct aspect ratio
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.camera.position.set(5, 5, 5);
        this.camera.lookAt(0, 0, 0);

        // Setup orbit controls
        this.setupControls();

        // Setup lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.1);
        this.scene.add(ambientLight);

        // Setup resize observer for container changes
        this.setupResizeObserver();

        // Load the point cloud from URL
        this.loadJSONPointCloudFromURL();

        // Start render loop
        this.animate();
    }

    setupControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.autoRotate = this.settings.autoRotate;
        this.controls.autoRotateSpeed = this.settings.rotationSpeed;
        this.controls.screenSpacePanning = true;
        this.controls.enableZoom = false;
        this.controls.update();
    }

    setupResizeObserver() {
        if (typeof ResizeObserver !== 'undefined') {
            // Debounce resize events to prevent excessive updates
            let resizeTimeout;

            this.resizeObserver = new ResizeObserver(entries => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    for (let entry of entries) {
                        const { width, height } = entry.contentRect;
                        console.log('Resize detected:', width, height); // Debug log

                        // Ensure we have valid dimensions
                        if (width > 0 && height > 0) {
                            this.onResize(width, height);
                        }
                    }
                }, 16); // ~60fps throttling
            });

            this.resizeObserver.observe(this.container);
        } else {
            // Fallback to window resize for older browsers
            this.windowResizeHandler = () => {
                if (this.container) {
                    const rect = this.container.getBoundingClientRect();
                    this.onResize(rect.width, rect.height);
                }
            };
            window.addEventListener('resize', this.windowResizeHandler);
        }
    }

    onResize(width, height) {
        console.log('Resizing to:', width, height); // Debug log

        if (width > 0 && height > 0 && this.camera && this.renderer) {
            // Update camera aspect ratio
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();

            // Update renderer size
            this.renderer.setSize(width, height, false); // false prevents CSS size update

            // Force a render
            if (this.scene) {
                this.renderer.render(this.scene, this.camera);
            }
        }
    }

    onResize(width, height) {
        if (width > 0 && height > 0) {
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
        } catch (err) {
            console.error('Error loading point cloud:', err);
            // In React context, you might want to emit an event or call a callback
            this.onError?.(err);
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

        if (this.pointCloudData?.metadata?.camera) {
            const cameraData = this.pointCloudData.metadata.camera;

            if (cameraData.fov) this.camera.fov = cameraData.fov;
            if (cameraData.near) this.camera.near = cameraData.near;
            if (cameraData.far) this.camera.far = cameraData.far;
            this.camera.updateProjectionMatrix();

            const target = new THREE.Vector3(
                cameraData.target.x,
                cameraData.target.y,
                cameraData.target.z
            );

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

            return;
        }

        // Fallback: auto-fit
        this.particles.geometry.computeBoundingBox();
        const box = this.particles.geometry.boundingBox;
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxSize = Math.max(size.x, size.y, size.z);
        const fitHeightDistance = maxSize / (2 * Math.atan(Math.PI * this.camera.fov / 360));
        const fitWidthDistance = fitHeightDistance / this.camera.aspect;
        const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance);

        const direction = new THREE.Vector3(1, 1, 1).normalize().multiplyScalar(distance);
        this.camera.position.copy(center).add(direction);

        if (this.controls) {
            this.controls.target.copy(center);
            this.controls.update();
        }
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());

        if (this.controls) {
            this.controls.update();
        }

        this.renderer.render(this.scene, this.camera);
    }

    updateSettings(newSettings) {
        Object.assign(this.settings, newSettings);

        if (newSettings.backgroundColor && this.renderer) {
            this.renderer.setClearColor(new THREE.Color(newSettings.backgroundColor));
        }

        if (newSettings.particleColor && this.particles) {
            this.particles.material.color.set(newSettings.particleColor);
        }

        if (newSettings.particleSize && this.particles && this.pointCloudData) {
            const originalModelSize = this.pointCloudData.metadata.originalModelSize || 1;
            const newSize = newSettings.particleSize * (originalModelSize / 100);
            this.particles.material.size = newSize;
        }

        if (this.controls) {
            if (newSettings.autoRotate !== undefined) {
                this.controls.autoRotate = newSettings.autoRotate;
            }
            if (newSettings.rotationSpeed !== undefined) {
                this.controls.autoRotateSpeed = newSettings.rotationSpeed;
            }
        }
    }

    async loadNewData(jsonUrl) {
        this.jsonUrl = jsonUrl;
        await this.loadJSONPointCloudFromURL();
    }

    destroy() {
        // Stop animation
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

        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }

        if (this.windowResizeHandler) {
            window.removeEventListener('resize', this.windowResizeHandler);
            this.windowResizeHandler = null;
        }

        if (this.container) {
            this.container.innerHTML = '';
        }

        console.log('JSONPointCloudViewer destroyed');
    }
}