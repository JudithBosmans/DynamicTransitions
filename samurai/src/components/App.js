import React, { useEffect, useState, useRef } from "react";

import "../styles/App.css";
import Cherry from "./Cherry";
import helm from "../pics/helm.png";

import Typewriter from "typewriter-effect";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          id="helm"
          className="helm"
          style={{
            backgroundImage: `url(${helm})`,
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1152px",
            height: "768px",
          }}
        />

        <ParallaxLayer
          offset={0.2}
          speed={1}
          onClick={() => ref.current.scrollTo(3)}
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
          onClick={() => ref.current.scrollTo(3)}
        >
          <p className="undertitle">Told with Hanakotoba</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={2}
          onClick={() => ref.current.scrollTo(3)}
        >
          <Cherry />
        </ParallaxLayer>
      </Parallax>
      <div id="detail"></div>
    </div>
  );
}

export default App;
