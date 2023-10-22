import React from "react";
import lillyStyles from "../styles/Lilly.css";

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Typewriter from "typewriter-effect";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// camera.position.set(0, 0, 350);
// camera.lookAt(0, 0, 0);

// const controls = new OrbitControls(camera, renderer.domElement);
// const loader = new GLTFLoader();
// let loadedModel;

// loader.load(
//   "./spiderLilly.glb",
//   (gltf) => {
//     // Callback function for when the model is loaded
//     loadedModel = gltf.scene; // Use 'gltf.scene' to access the loaded model
//     loadedModel.position.y = -170; // Vertical
//     loadedModel.position.x = 80; // Horizontal

//     scene.add(loadedModel);
//   },
//   (xhr) => {
//     // Progress callback, if needed
//     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//   },
//   (error) => {
//     // Error callback, if there is an issue loading the model
//     console.error("Error loading GLTF model:", error);
//   }
// );

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);

// const topLight = new THREE.DirectionalLight(0xffffff, 3);
// topLight.position.set(0, 1, 0);
// scene.add(topLight);

// // Rotation
// function animate() {
//   if (loadedModel) {
//     loadedModel.rotation.y += 0.01;
//   }

//   controls.update();
//   renderer.render(scene, camera);

//   requestAnimationFrame(animate);
// }

// animate();

export const Lilly = () => {
  return (
    <div>
      <h1 id="lillyTitle">
        <Typewriter
          options={{
            strings: ["Spider Lilly", "曼珠沙華"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
};

export default Lilly;
