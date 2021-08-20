
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 1000);


var rederer = new THREE.WebGLRenderer();
renderer = new THREE.WebGLRenderer();
rederer.setSize(window.innerWidth, window.innerHeight);
scene.fog = new THREE.FogExp2(0x03544e, 0.001);
renderer.setClearColor(scene.fog.color);
document.body.appendChild(rederer.domElement);


const geometry = new THREE.BufferGeometry();
    const positions = 2;
    const rMax = PLANE_SIZE * PLANE_SIZE
    for (let x = -PLANE_SIZE / 2; x <= PLANE_SIZE / 2; x += PLANE_REPEAT) {
      for (let y = -PLANE_SIZE / 2; y <= PLANE_SIZE / 2; y += PLANE_REPEAT) {
        if (x * x + y * y > rMax) {
          continue
        }
        positions.push(x, y, 0)
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.computeBoundingSphere()
    const material = new THREE.ShaderMaterial(wave)
    const mesh = new THREE.Points(geometry, material)
    //mesh.rotation.x = Math.PI / 2
    // mesh.rotation.z = Math.PI / 6
    scene.add(mesh)

camera.position.z = 5;

var AmbientLight  = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(AmbientLight);

var directionalLight  = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1,1,0);
directionalLight.castShadow = true
scene.add(directionalLight);

var controls  = new THREE.OrbitControls(camera, rederer.domElement);


function animate(){
    requestAnimationFrame(animate);
 
    //cubee.rotation.x += 0.01;
    //cubee.rotation.z += 0.01;
    rederer.render(scene, camera);
}
animate();


/*
var container = document.getElementById('container')

	var vertexHeight = 15000,
		planeDefinition = 100,
		planeSize = 1245000,
		totalObjects = 1,
    background = "#1C1A1A",
		meshColor = "#FF4D05"; 

	
	var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000)
	camera.position.z = 10000;
	camera.position.y = 10000;

	var scene = new THREE.Scene();
	scene.fog = new THREE.Fog(background, 1, 3000000);


  var planeGeo = new THREE.BoxGeometry(10, 10, 10, );  //point
	
  var plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({
		color: meshColor,
		wireframe: true
	}));
	plane.rotation.x -= Math.PI * .5;

	scene.add(plane);

	var rederer = new THREE.WebGLRenderer({alpha: false});
	rederer.setSize(window.innerWidth, window.innerHeight);
	rederer.setClearColor(background, 1);

  container.appendChild(rederer.domElement);


  updatePlane();

	function updatePlane() {
		for (var i = 0; i < planeGeo.vertices.length; i++) {
      planeGeo.vertices[i].z += Math.random() * vertexHeight - vertexHeight;
      planeGeo.vertices[i]._myZ = planeGeo.vertices[i].z
		}
	};
	var controls  = new THREE.OrbitControls(camera, rederer.domElement);
	render();

  var count = 0
	function render() {
		requestAnimationFrame(render);
    // camera.position.z -= 150;
    var x = camera.position.x;
    var z = camera.position.z;
    //camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10;
    //camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10;
    //camera.lookAt(new THREE.Vector3(0, 8000, 0))

    for (var i = 0; i < planeGeo.vertices.length; i++) {
      var z = +planeGeo.vertices[i].z;
      planeGeo.vertices[i].z = Math.sin(( i + count * 0.00002)) * (planeGeo.vertices[i]._myZ - (planeGeo.vertices[i]._myZ* 0.6))
      plane.geometry.verticesNeedUpdate = true;

      count += 0.1
    }

		//renderer.render(scene, camera);
		rederer.render(scene, camera)
	}

	window.addEventListener('resize', onWindowResize, false);

	function onWindowResize() {
		//changes the size of the canavs and updates it
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		rederer.setSize(window.innerWidth, window.innerHeight);
	}


*/
