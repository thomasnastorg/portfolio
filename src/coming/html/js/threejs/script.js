var container = document.getElementById('container')

var 
    vertexHeight =30,
		planeDefinition = 6,
		planeSize =100,
		totalObjects = 100,
    background = "#1C1A1A",
		meshColor = "#FF4D05"; 

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 400000)

var renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild(renderer.domElement);

var scene = new THREE.Scene();
scene.fog = new THREE.Fog(background, 1, 3000000);

var geometry = new THREE.PlaneGeometry(vertexHeight, vertexHeight, totalObjects, totalObjects);

var material = new THREE.MeshBasicMaterial({
  color: meshColor,
  wireframe: true
});
var flag = new THREE.Mesh(geometry, material);
scene.add(flag);
var controls  = new THREE.OrbitControls(camera, renderer.domElement);
flag.rotation.set(90,0,180);

camera.position.z = 5;

const clock = new THREE.Clock();

function animate(){
  const t = clock.getElapsedTime();
  flag.geometry.vertices.map(v =>{
    const  waveX1 = 0.5 * Math.sin(v.x * 1 + t);
    const  waveX2 = 0.5 * Math.sin(v.x * 2 + t);

    v.z = waveX1 + waveX2
     
  });

  flag.geometry.verticesNeedUpdate = true;

  requestAnimationFrame(animate);
  renderer.render( scene, camera);
}
animate();

	window.addEventListener('resize', onWindowResize, false);

	function onWindowResize() {
		//changes the size of the canavs and updates it
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}



