import './style.css'

import * as THREE from 'three';
import { AmbientLight, TextureLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// We need a scene, a camera, and a renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render( scene, camera);

//Torus

const techTexture = new THREE.TextureLoader().load('tech texture.jpg');
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);
//scene.add(torus);

//Light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5 , 5 , 5);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(ambientLight);

//Helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);

//Controls
const controls = new OrbitControls(camera, renderer.domElement);


//Stars

function addStar(){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}
Array(200).fill().forEach(addStar);

//Space
const spaceTexture = new THREE.TextureLoader().load('space.png');
scene.background = spaceTexture;

//Chess Piece
const chessTexture = new THREE.TextureLoader().load('chessKing.jpg');
const chess = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3), 
  new THREE.MeshBasicMaterial({map: chessTexture})
  );
  chess.position.set(0,0,-20);
  //scene.add(chess);

//Moon
  const moonTexture = new THREE.TextureLoader().load('moon.jpg');
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({map: moonTexture})
  );
  moon.position.set(100, 0, -250);
  scene.add(moon);

  //Jupiter

  const jupiterTexture = new THREE.TextureLoader().load('2k_jupiter.jpg');
  const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(30, 320, 320),
    new THREE.MeshStandardMaterial({map: jupiterTexture})
  );
  jupiter.position.set(0, 0, -250);
  scene.add(jupiter);

  //Earth

  const earthTexture = new THREE.TextureLoader().load('2k_earth_daymap.jpg');
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(6, 64, 64),
    new THREE.MeshStandardMaterial({map: earthTexture})
  );
  earth.position.set(-100, 0, -250);
  scene.add(earth);

  //Avatar

  const avatarTexture = new THREE.TextureLoader().load('avatar.jpg');
  const avatar = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshStandardMaterial({map: avatarTexture})
    );
  avatar.position.set(30,0,-30);
  scene.add(avatar);


function moveCamera(){
  const t = document.body.getBoundingClientRect(). top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.y += 0.05;

  chess.rotation.y += 0.01;
  chess.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}

//document.body.onscroll = moveCamera;

//Torus Animation
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}
animate();