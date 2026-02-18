import './style.css';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

console.log('Aigenvo Design 2.0 Loaded');

/**
 * ------------------------------------------------------------------------
 * THREE.JS HERO SCENE
 * ------------------------------------------------------------------------
 */
function initThreeJS() {
    const canvas = document.querySelector('#hero-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        // Spread particles in a wide area
        posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x00f3ff, // Neon Blue
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    // Add a glowing sphere in the center (abstract core)
    const sphereGeo = new THREE.SphereGeometry(1, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x6A0DAD, // Royal Purple
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    camera.position.z = 4;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    });

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        // Rotate particles
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = elapsedTime * 0.02;

        // Subtle waves in particles
        // (Advanced: updating positions in a shader would be better for perf, but this is ok for 2k particles)

        // Mouse Parallax
        particlesMesh.rotation.y += mouseX * 0.5;
        particlesMesh.rotation.x += mouseY * 0.5;

        // Sphere pulse
        sphere.scale.setScalar(1 + Math.sin(elapsedTime) * 0.1);
        sphere.rotation.y = elapsedTime * -0.2;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };

    animate();

    // Resize Handle
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

initThreeJS();

/**
 * ------------------------------------------------------------------------
 * GSAP ANIMATIONS
 * ------------------------------------------------------------------------
 */

// Hero Text Reveal
const heroTl = gsap.timeline();
heroTl.from('.hero-title span', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: 'power4.out',
    delay: 0.5
})
    .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=1')
    .from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
    }, '-=0.5');

// Bento Grid Reveals
gsap.utils.toArray('.bento-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: 'power3.out'
    });
});

// Spotlight Effect
document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});
