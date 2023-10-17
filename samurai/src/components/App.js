import React, { useEffect, useState, useRef } from "react";

import Cherry from "./Cherry";
import Bonsai from "./Bonsai";
import Lilly from "./Lilly";
import Outro from "./Outro";

import "../styles/App.css";
import helm from "../pics/helm.png";

import Typewriter from "typewriter-effect";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={7} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          id="helm"
          className="helm"
          style={{
            backgroundImage: `url(${helm})`,
            top: "2%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1152px",
            height: "768px",
          }}
        />

        <ParallaxLayer
          offset={0.2}
          speed={1}
          onClick={() => ref.current.scrollTo(1)}
        >
          <h1 id="titelType">
            <Typewriter
              options={{
                strings: ["A Samurai Story", "サムライの物語"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={2}
          onClick={() => ref.current.scrollTo(1)}
        >
          <p className="undertitle">Told with Hanakotoba</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          onClick={() => ref.current.scrollTo(2)}
        >
          <Cherry />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={2}
          onClick={() => ref.current.scrollTo(3)}
        >
          <Bonsai />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(4)}
        >
          <Lilly />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <Outro />
        </ParallaxLayer>
      </Parallax>
      <div id="detail"></div>
    </div>
  );
}

export default App;
