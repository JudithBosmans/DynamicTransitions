import React, { useRef, useEffect } from "react";
import lillyStyles from "../styles/Lilly.css";

import * as THREE from "three";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls as OrbitControlsImpl } from "three/addons/controls/OrbitControls.js";
import Typewriter from "typewriter-effect";

extend({ OrbitControls: OrbitControlsImpl });

function Scene() {
  const sceneRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    camera.position.set(2, 2, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/model/lilly.glb",
      function (gltf) {
        sceneRef.current.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <orbitControls args={[camera, gl.domElement]} />
      <group ref={sceneRef} />
    </>
  );
}

export const Lilly = () => {
  return (
    <Canvas>
      <Scene />
      <h1 id="lillyTitle">
        <Typewriter
          options={{
            strings: ["Spider Lilly", "曼珠沙華"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </Canvas>
  );
};

export default Lilly;
