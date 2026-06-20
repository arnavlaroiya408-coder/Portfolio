// // --- 1. Basic Setup ---
// const canvas = document.querySelector('#webgl-canvas');
// const scene = new THREE.Scene();

// // Camera setup
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Renderer setup
// const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// // --- 2. Create 3D Object (IT Matrix / Constellation) ---
// const particlesGeometry = new THREE.BufferGeometry();
// const particlesCount = 800; // Total number of dots

// const posArray = new Float32Array(particlesCount * 3);

// // Fill array randomly to place particles around space
// for (let i = 0; i < particlesCount * 3; i++) {
//     posArray[i] = (Math.random() - 0.5) * 10;
// }

// particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// // Styling the particles
// const particlesMaterial = new THREE.PointsMaterial({
//     size: 0.03,
//     color: '#00f2fe',
//     transparent: true,
//     opacity: 0.8
// });

// // Create the complete 3D object mesh
// const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
// scene.add(particlesMesh);

// // Light Source
// const pointLight = new THREE.PointLight('#4facfe', 2);
// pointLight.position.set(2, 3, 4);
// scene.add(pointLight);

// // --- 3. Interactive Mechanics ---
// let mouseX = 0;
// let mouseY = 0;

// // Track mouse movement to rotate background subtly
// document.addEventListener('mousemove', (event) => {
//     mouseX = (event.clientX / window.innerWidth) - 0.5;
//     mouseY = (event.clientY / window.innerHeight) - 0.5;
// });

// // Adapt to viewport window resizing dynamically
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // --- 4. Animation Loop ---
// const clock = new THREE.Clock();

// const animate = () => {
//     const elapsedTime = clock.getElapsedTime();

//     // Constant slow rotation of the 3D grid
//     particlesMesh.rotation.y = elapsedTime * 0.05;

//     // React to user cursor movement dynamically
//     particlesMesh.rotation.x = -mouseY * 0.5;
//     particlesMesh.rotation.y = mouseX * 0.5;

//     // Render step
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// };

// animate();
