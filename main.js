import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class JSONPointCloudViewer {
    constructor(container, options = {}) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 8000); // Use a temporary aspect ratio like 1
        // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 8000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
        this.controls = null;
        this.particles = null;
        this.pointCloudData = null;
        this.particleTexture = this.createParticleTexture();

        const urlParams = new URLSearchParams(window.location.search);

        this.settings = {
            particleSize: options.particleSize || 0.1,
            particleColor: urlParams.get('particleColor') || urlParams.get('particle_color') || options.particleColor || '#372CD5',
            backgroundColor: urlParams.get('backgroundColor') || urlParams.get('background_color') || options.backgroundColor || '#ffffff'
        };

        this.jsonUrl = urlParams.get('url') || urlParams.get('jsonUrl') || 'https://gmxkwskcrqq1xoty.public.blob.vercel-storage.com/particle-cloud-turbine-246000pts.json';

        console.log('Point Cloud Viewer Configuration:', {
            jsonUrl: this.jsonUrl,
            particleColor: this.settings.particleColor,
            backgroundColor: this.settings.backgroundColor
        });

        this.container = container;
        this.init()
    }

    init() {
        // Setup renderer
        if (this.container) {
            const width = this.container.clientWidth;
            const height = this.container.clientHeight;

            // Set the camera's aspect ratio based on the container size
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();

            // Set the renderer size based on the container
            this.renderer.setSize(width, height);
            this.renderer.setClearColor(new THREE.Color(this.settings.backgroundColor));
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.container.appendChild(this.renderer.domElement);
        } else {
            console.error('Container element not provided!');
            return; // Exit if no container
        }
        // this.renderer.setSize(window.innerWidth, window.innerHeight);
        // this.renderer.setClearColor(new THREE.Color(this.settings.backgroundColor));
        // const container = document.getElementById('point-cloud-container');
        // container.appendChild(this.renderer.domElement);

        // Setup camera
        this.camera.position.set(5, 5, 5);
        this.camera.lookAt(0, 0, 0);

        // Setup orbit controls (disable zoom)
        this.setupControls();

        // Setup lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.1);
        this.scene.add(ambientLight);

        // Window resize handler
        this.setupEventListeners();
        // window.addEventListener('resize', () => {
        //     this.camera.aspect = window.innerWidth / window.innerHeight;
        //     this.camera.updateProjectionMatrix();
        //     this.renderer.setSize(window.innerWidth, window.innerHeight);
        // });

        // Load the point cloud from URL
        this.loadJSONPointCloudFromURL();

        // Start render loop
        this.animate();
    }

    setupControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = true;
        this.controls.enableZoom = false; // Disable zooming
        this.controls.update();
    }

    setupEventListeners() {
        if (this.container) {
            this.resizeObserver = new ResizeObserver(() => {
                this.onWindowResize();
            });
            this.resizeObserver.observe(this.container);
        }
        // window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }

    // onWindowResize() {
    //     this.camera.aspect = window.innerWidth / window.innerHeight;
    //     this.camera.updateProjectionMatrix();
    //     this.renderer.setSize(window.innerWidth, window.innerHeight);
    // }
    onWindowResize() {
        // Only resize if a container is available
        if (this.container) {
            const width = this.container.clientWidth;
            const height = this.container.clientHeight;

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
        const error = document.getElementById('error');

        try {
            error.style.display = 'none';

            const response = await fetch(this.jsonUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();
            this.processPointCloud(jsonData);
        } catch (err) {
            console.error('Error loading point cloud:', err);
            error.style.display = 'block';

            // Hide error after 5 seconds
            setTimeout(() => {
                error.style.display = 'none';
            }, 5000);
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
            console.log('Point cloud loaded successfully!');
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

        // Use hardcoded particle size
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

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.controls) {
            this.controls.update();
        }

        this.renderer.render(this.scene, this.camera);
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