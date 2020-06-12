var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light = new THREE.DirectionalLight();
light.position.set(-10, 1 , 1);
camera.add(light);
scene.add(camera);

camera.position.y = 10;
camera.position.z = 50;

var update = function()
{

};

var render = function()
{
renderer.render(scene, camera);
renderer.setClearColor("white");
};

var GameLoop = function()
{
requestAnimationFrame(GameLoop);

update();
render();
};

GameLoop();


//Tworzenie pionka:

//Kolor
var Kolor = new THREE.MeshPhongMaterial({color: 0xC0C0C0 });

// //podstawa:

var podstawa = new THREE.Mesh(
	new THREE.CylinderGeometry(15, 15, 1.5, 300),
	Kolor
	);
podstawa.position.y = -15;
scene.add(podstawa);

 var podstawa2 = new THREE.Mesh(
    new THREE.CylinderGeometry(14, 14, 1.1, 300),
	Kolor
    );
podstawa2.position.y = -13.6;
scene.add(podstawa2);

//srodek

var points = [];
for ( var i = 10; i < 25; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 3 + 5, ( i -16) * 2 ) );
}
var geometry = new THREE.LatheGeometry( points );
var lathe = new THREE.Mesh( geometry, Kolor );
lathe.scale.set(1.5, 1.2, 1.5);
scene.add( lathe );

//kula

var kula = new THREE.Mesh( 
	new THREE.SphereGeometry( 12, 32, 32 )
	, Kolor );
kula.position.y = 27;
scene.add( kula );

//piercień
var pierscien = new THREE.Mesh(
    new THREE.CylinderGeometry(12, 12, 1.1, 300),
	Kolor
    );
pierscien.position.y = 14;
scene.add(pierscien);