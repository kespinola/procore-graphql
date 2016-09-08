import './ui/styles/app.global.css'

// import React from 'react'
// import { render } from 'react-dom'
// import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
// import { reducer as localReducer } from 'redux-react-local'
//
// import configureStore from './redux/utils/configureStore'
// import { reducer as appReducer } from './redux/modules/app'
// import { reducer as ircReducer } from './redux/modules/irc'
// import UserInterface from './ui/components/UI.jsx'
//
// const reducer = combineReducers({
//   form: formReducer,
//   local: localReducer,
//   app: appReducer,
//   irc: ircReducer,
// })
//
// const store = configureStore({}, reducer)
//
// render(
//   <UserInterface store={store} />,
//   document.getElementById('root')
// )

import * as THREE from 'three'
import OrbitControls from 'three-orbit-controls'
import MD2Loader from './md2loader'

THREE.OrbitControls = OrbitControls(THREE)
THREE.MD2Loader = MD2Loader(THREE)

import Char from './char'

const MD2CharacterComplex = Char(THREE)

var SCREEN_WIDTH = window.innerWidth;
			var SCREEN_HEIGHT = window.innerHeight;

			var container, camera, scene, renderer;

			var cameraControls;

      var character;

			var controls = {

				moveForward: false,
				moveBackward: false,
				moveLeft: false,
				moveRight: false

			};

			var clock = new THREE.Clock();

			init();
			animate();

			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				// CAMERA

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 4000 );
				camera.position.set( 0, 150, 1300 );

				// SCENE

				scene = new THREE.Scene();
				scene.fog = new THREE.Fog( 0xffffff, 1000, 4000 );

				scene.add( camera );

				// LIGHTS

				scene.add( new THREE.AmbientLight( 0x222222 ) );

				var light = new THREE.DirectionalLight( 0xffffff, 2.25 );
				light.position.set( 200, 450, 500 );

				light.castShadow = true;

				light.shadow.mapSize.width = 1024;
				light.shadow.mapSize.height = 512;

				light.shadow.camera.near = 100;
				light.shadow.camera.far = 1200;

				light.shadow.camera.left = -1000;
				light.shadow.camera.right = 1000;
				light.shadow.camera.top = 350;
				light.shadow.camera.bottom = -350;

				scene.add( light );
				// scene.add( new THREE.CameraHelper( light.shadow.camera ) );


				//  GROUND

				var gt = new THREE.TextureLoader().load( "textures/terrain/grasslight-big.jpg" );
				var gg = new THREE.PlaneBufferGeometry( 16000, 16000 );
				var gm = new THREE.MeshPhongMaterial( { color: 0xffffff, map: gt } );

				var ground = new THREE.Mesh( gg, gm );
				ground.rotation.x = - Math.PI / 2;
				ground.material.map.repeat.set( 64, 64 );
				ground.material.map.wrapS = THREE.RepeatWrapping;
				ground.material.map.wrapT = THREE.RepeatWrapping;
				// note that because the ground does not cast a shadow, .castShadow is left false
				ground.receiveShadow = true;

				scene.add( ground );

				// RENDERER

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setClearColor( scene.fog.color );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
				container.appendChild( renderer.domElement );

				//

				renderer.gammaInput = true;
				renderer.gammaOutput = true;

				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;

				// STATS

				// stats = new Stats();
				// container.appendChild( stats.dom );

				// EVENTS

				window.addEventListener( 'resize', onWindowResize, false );
				document.addEventListener( 'keydown', onKeyDown, false );
				document.addEventListener( 'keyup', onKeyUp, false );

				// CONTROLS

				cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
				cameraControls.target.set( 0, 50, 0 );

				// CHARACTER

				var configOgro = {

					baseUrl: "models/md2/ogro/",

					body: "ogro.md2",
					skins: [ "grok.jpg"],
					weapons:  [ [ "weapon.md2", "weapon.jpg" ] ],
					animations: {
						move: "run",
						idle: "stand",
						jump: "jump",
						attack: "attack",
						crouchMove: "cwalk",
						crouchIdle: "cstand",
						crouchAttach: "crattack"
					},

					walkSpeed: 350,
					crouchSpeed: 175

				};

				character = new MD2CharacterComplex();
				character.scale = 3;
				character.controls = controls;
				character.onLoadComplete = function () {
					character.enableShadows( true );
					character.setWeapon( 0 );
					character.setSkin( 0 );
					scene.add( character.root );
				};
				character.loadParts( configOgro );
			}

			// EVENT HANDLERS

			function onWindowResize( event ) {

				SCREEN_WIDTH = window.innerWidth;
				SCREEN_HEIGHT = window.innerHeight;

				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

				camera.aspect = SCREEN_WIDTH/ SCREEN_HEIGHT;
				camera.updateProjectionMatrix();

			}

			function onKeyDown ( event ) {

				event.stopPropagation();

				switch( event.keyCode ) {

					case 38: /*up*/
					case 87: /*W*/ 	controls.moveForward = true; break;

					case 40: /*down*/
					case 83: /*S*/ 	 controls.moveBackward = true; break;

					case 37: /*left*/
					case 65: /*A*/   controls.moveLeft = true; break;

					case 39: /*right*/
					case 68: /*D*/    controls.moveRight = true; break;

					case 67: /*C*/     controls.crouch = true; break;
					case 32: /*space*/ controls.jump = true; break;
					case 17: /*ctrl*/  controls.attack = true; break;

				}

			}

			function onKeyUp ( event ) {

				event.stopPropagation();

				switch( event.keyCode ) {

					case 38: /*up*/
					case 87: /*W*/ controls.moveForward = false; break;

					case 40: /*down*/
					case 83: /*S*/ 	 controls.moveBackward = false; break;

					case 37: /*left*/
					case 65: /*A*/ 	 controls.moveLeft = false; break;

					case 39: /*right*/
					case 68: /*D*/ 	  controls.moveRight = false; break;

					case 67: /*C*/     controls.crouch = false; break;
					case 32: /*space*/ controls.jump = false; break;
					case 17: /*ctrl*/  controls.attack = false; break;

				}

			}

			//

			function animate() {

				requestAnimationFrame( animate );
				render();

				// stats.update();

			}

			function render() {

				var delta = clock.getDelta();

				cameraControls.update( delta );

				if(character) {
          character.update( delta );
        }

				renderer.render( scene, camera );

			}
