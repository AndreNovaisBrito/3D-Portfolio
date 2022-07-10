import './style.css'
import * as THREE from 'three';
import { AmbientLight, TextureLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const EARTH_DIAMETER = 1;
const MERCURY_DIAMETER = 0.383;
const VENUS_DIAMETER = 0.949;
const MOON_DIAMETER = 0.2724;
const MARS_DIAMETER = 0.532;
const JUPITER_DIAMETER = 11.2;
const SATURN_DIAMETER = 9.45;
const URANUS_DIAMETER = 4.01;
const NEPTUNE_DIAMETER = 3.88;
const PLUTO_DIAMETER = 0.18;
const SIZE = 50;
const planetXdistance = 0;
const planetYdistance = 100;
const planetZdistance = -250;



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

//const techTexture = new THREE.TextureLoader().load('tech texture.jpg');
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
//Array(200).fill().forEach(addStar);

//Space
const spaceTexture = new THREE.TextureLoader().load('space.png');
scene.background = spaceTexture;

// //Chess Piece
// const chessTexture = new THREE.TextureLoader().load('chessKing.jpg');
// const chess = new THREE.Mesh(
//   new THREE.BoxGeometry(3,3,3), 
//   new THREE.MeshBasicMaterial({map: chessTexture})
//   );
//   chess.position.set(0,0,-20);
//   //scene.add(chess);

//Mercury
  const mercuryTexture = new THREE.TextureLoader().load('2k_mercury.jpg');
  const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(MERCURY_DIAMETER/2*SIZE, 32, 32),
    new THREE.MeshStandardMaterial({map: mercuryTexture})
  );
  mercury.position.set(0, planetYdistance*(-4), planetZdistance);
  scene.add(mercury);

  //Venus
  const venusTexture = new THREE.TextureLoader().load('2k_venus_surface.jpg');
  const venus = new THREE.Mesh(
    new THREE.SphereGeometry(VENUS_DIAMETER/2*SIZE, 32, 32),
    new THREE.MeshStandardMaterial({map: venusTexture})
  );
  venus.position.set(0, planetYdistance*(-3), planetZdistance);
  scene.add(venus);

  //Earth

  const earthTexture = new THREE.TextureLoader().load('2k_earth_daymap.jpg');
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(EARTH_DIAMETER/2*SIZE, 32, 32),
    new THREE.MeshStandardMaterial({map: earthTexture})
  );
  earth.position.set(0, planetYdistance*(-2), planetZdistance);
  scene.add(earth);

  //Moon
  const moonTexture = new THREE.TextureLoader().load('moon.jpg');
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(MOON_DIAMETER/2*SIZE, 32, 32),
    new THREE.MeshStandardMaterial({map: moonTexture})
  );
  moon.position.set(0, planetYdistance*(-1), planetZdistance);
  scene.add(moon);

  //Mars
  const marsTexture = new THREE.TextureLoader().load('2k_mars.jpg');
  const mars = new THREE.Mesh(
    new THREE.SphereGeometry(MARS_DIAMETER/2*SIZE, 32, 32),
    new THREE.MeshStandardMaterial({map: marsTexture})
  );
  mars.position.set(0, planetYdistance*(0), planetZdistance);
  scene.add(mars);

  //Jupiter
  const jupiterTexture = new THREE.TextureLoader().load('2k_jupiter.jpg');
  const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(JUPITER_DIAMETER/2*SIZE, 32, 32),
    new THREE.MeshStandardMaterial({map: jupiterTexture})
  );
  jupiter.position.set(0, planetYdistance*(1), planetZdistance*4);
  scene.add(jupiter);

  //Saturn
  const saturnTexture = new THREE.TextureLoader().load('2k_saturn.jpg');
  const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(SATURN_DIAMETER/2*SIZE, 32, 32),
    new THREE.MeshStandardMaterial({map: saturnTexture})
  );
  saturn.position.set(0, planetYdistance*(-8), planetZdistance*(3));
  scene.add(saturn);

  //Uranus
  const uranusTexture = new THREE.TextureLoader().load('2k_uranus.jpg');
  const uranus = new THREE.Mesh(
    new THREE.SphereGeometry(URANUS_DIAMETER/2*SIZE, 32, 32),
    new THREE.MeshStandardMaterial({map: uranusTexture})
  );
  uranus.position.set(0, planetYdistance*(4), planetZdistance);
  scene.add(uranus);
  
  //Neptune
  const neptuneTexture = new THREE.TextureLoader().load('2k_neptune.jpg');
  const neptune = new THREE.Mesh(
    new THREE.SphereGeometry(NEPTUNE_DIAMETER/2*SIZE, 32, 32),
    new THREE.MeshStandardMaterial({map: neptuneTexture})
  );
  neptune.position.set(0, planetYdistance*(4), planetZdistance*3);
  scene.add(neptune);

  //Pluto
  const plutoTexture = new THREE.TextureLoader().load('2k_pluto.jpg');
  const pluto = new THREE.Mesh(
    new THREE.SphereGeometry(PLUTO_DIAMETER/2*SIZE, 32, 32),
    new THREE.MeshStandardMaterial({map: plutoTexture})
  );
  pluto.position.set(0, planetYdistance*(5), planetZdistance);
  scene.add(pluto);


  //Avatar

  const avatarTexture = new THREE.TextureLoader().load('avatar.jpg');
  const avatar = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshStandardMaterial({map: avatarTexture})
    );
  avatar.position.set(30,0,-30);
  //scene.add(avatar);


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

  earth.rotation.y += 0.01;
  mercury.rotation.y += 0.01;
  venus.rotation.y += 0.01;
  mars.rotation.y += 0.01;
  jupiter.rotation.y += 0.01;
  saturn.rotation.y += 0.01;
  uranus.rotation.y += 0.01;
  neptune.rotation.y += 0.01;
  pluto.rotation.y += 0.01;

  
  controls.update();
  renderer.render(scene, camera);
}
animate();