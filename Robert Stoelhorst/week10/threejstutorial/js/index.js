console.log("is this working?")

let scene, camera, renderer, cube;

const init = function() {
  scene = new THREE.Scene();

  camera =  new THREE.PerspectiveCamera(75, window.innerWidth /
  window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // controls = new THREE.OrbitControls( camera, rendera.domElement );

  const geometry = new THREE.BoxGeometry( 2, 2, 2 );

  // const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );

  const cubeMaterials =
[
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load('textures/pirate-icon.jpg'), side: THREE.DoubleSide } ),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load('textures/eye.jpg'), side: THREE.DoubleSide } ),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load('textures/brick_bump.jpg'), side: THREE.DoubleSide } ),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load('textures/eye.jpg'), side: THREE.DoubleSide } ),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load('textures/disturb.jpg'), side: THREE.DoubleSide } ),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load('textures/crate.gif'), side: THREE.DoubleSide } )
];
  const material = new THREE.MeshFaceMaterial( cubeMaterials );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 4;
};

const animate = function() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.002;
  cube.rotation.y += 0.002;

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false)

init();
animate();
