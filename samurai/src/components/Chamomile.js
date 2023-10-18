import chamomileStyles from "../styles/Chamomile.css";
import Typewriter from "typewriter-effect";

import {
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useState,
  useImperativeHandle,
} from "react";

import { useSpring, animated } from "@react-spring/three";
import { Canvas, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { Vector2 } from "three";

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

function Cylinder() {
  return (
    <mesh position={[4, -1, 1]}>
      {" "}
      {/* Replace x, y, z with your desired coordinates */}
      <cylinderGeometry args={[0.1, 0.1, 3, 32]} />
      <meshBasicMaterial color="#487748" />
    </mesh>
  );
}

const MyScene = forwardRef(({}, ref) => {
  const isOver = useRef(false);
  const [vector2] = useState(() => new Vector2());

  const { width, height } = useThree((state) => state.size);

  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      position: [0, 0],
      color: "#ff6d6d",
      onChange: ({ value }) => {
        vector2.set(value.position[0], value.position[1]);
      },
      config: (key) => {
        switch (key) {
          case "scale":
            return {
              mass: 4,
              friction: 10,
            };
          case "position":
            return { mass: 4, friction: 220 };
          default:
            return {};
        }
      },
    }),
    []
  );

  useImperativeHandle(ref, () => ({
    getCurrentPosition: () => vector2,
  }));

  const handleClick = useCallback(() => {
    let clicked = false;

    return () => {
      clicked = !clicked;
      api.start({
        color: clicked ? "#569AFF" : "#ff6d6d",
      });
    };
  }, []);

  const handlePointerEnter = () => {
    api.start({
      scale: 1,
    });
  };

  const handlePointerLeave = () => {
    api.start({
      scale: 0.5,
    });
  };

  const handleWindowPointerOver = useCallback(() => {
    isOver.current = true;
  }, []);

  const handleWindowPointerOut = useCallback(() => {
    isOver.current = false;

    api.start({
      position: [0, 0],
    });
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      if (isOver.current) {
        const x = (e.offsetX / width) * 2 - 1;
        const y = (e.offsetY / height) * -2 + 1;

        api.start({
          position: [x * 5, y * 2],
        });
      }
    },
    [api, width, height]
  );

  useEffect(() => {
    window.addEventListener("pointerover", handleWindowPointerOver);
    window.addEventListener("pointerout", handleWindowPointerOut);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointerover", handleWindowPointerOver);
      window.removeEventListener("pointerout", handleWindowPointerOut);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [handleWindowPointerOver, handleWindowPointerOut, handlePointerMove]);

  return (
    <>
      <Cylinder />
      <animated.mesh
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick()}
        scale={springs.scale}
        position={springs.position.to((x, y) => [x, y, 0])}
      >
        <sphereGeometry args={[2, 64, 32]} />
        <AnimatedMeshDistortMaterial
          speed={5}
          distort={0.5}
          color={springs.color}
        />
      </animated.mesh>
    </>
  );
});

export default function Chamomile() {
  const blobApi = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (blobApi.current) {
        const { x, y } = blobApi.current.getCurrentPosition();
        console.log("the blob is at position", { x, y });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scene-container">
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight intensity={1} position={[0, 6, 0]} />
        <MyScene ref={blobApi} />
      </Canvas>
      <div>
        <h1 id="bonsaiTitle">
          <Typewriter
            options={{
              strings: ["Red Chamomile", "レッドカモミール"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      <div id="chamomileText">
        <p id="bonsaiText1">
          Amidst a red camellia garden's backdrop, he discovered love's profound
          beauty. The deep, vibrant red of the camellias mirrored the passion
          and affection he shared with a kindred soul.
        </p>
        <p id="bonsaiText2">
          Their love blossomed like the camellia petals, vibrant and full of
          life, weaving a tapestry of devotion and shared dreams.
        </p>
        <p id="bonsaiText3">Drag the Chamomila to its stem to complete it.</p>
      </div>
    </div>
  );
}
