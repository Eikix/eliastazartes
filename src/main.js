import App from './App.svelte';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a1931);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(7);
camera.position.setX(0);
camera.position.setY(-0.5);

renderer.render(scene, camera);

const loader = new GLTFLoader();

let mixer;
let delta;
let obj;
const clock = new THREE.Clock();

loader.load(
    'cloud_station/scene.gltf',
    function (model) {
        console.log(model);
        obj = model.scene;
        obj.position.set(0.5, -2, -10);
        obj.rotation.x += 0.09;
        mixer = new THREE.AnimationMixer(model.scene);
        console.log(mixer);
        const animationAction = mixer.clipAction(model.animations[0]);
        animationAction.play();
        scene.add(model.scene);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// const controls = new OrbitControls(camera, renderer.domElement);

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
    if (obj) {
        obj.rotation.y += -Math.random() / 100;
        obj.rotation.z += -Math.random() / 100;
    }
}
document.body.onscroll = moveCamera;
moveCamera();

// Resize

// window.addEventListener('resize', onWindowResize, false);

// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(window.innerWidth, window.innerHeight);
// }

// Animate

function animate() {
    requestAnimationFrame(animate);

    delta = clock.getDelta();

    if (mixer) mixer.update(delta);
    renderer.render(scene, camera);
    // controls.update();
}

animate();

// Svelte

const app = new App({
    target: document.getElementById('app'),
});

export default app;
