import React, { useEffect, useState, useRef } from "react";

import Cherry from "./Cherry";
import Bonsai from "./Bonsai";
import Chamomile from "./Chamomile";
import Lilly from "./Lilly";
import Chrys from "./Chrys";
import Outro from "./Outro";
import Button from "./Button";

import "../styles/App.css";
import helm from "../pics/helm.png";
import crhysHelm from "../pics/chrysHelm.png";

import Typewriter from "typewriter-effect";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={5} ref={ref}>
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
          speed={2.5}
          onClick={() => ref.current.scrollTo(1.5)}
        >
          <Cherry />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.99}
          speed={3}
          onClick={() => ref.current.scrollTo(2)}
        >
          <Bonsai />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={4}
          onClick={() => ref.current.scrollTo(2.99)}
        >
          <Chamomile />
        </ParallaxLayer>

        <div className="panel">
          <ParallaxLayer
            className="lillyPanel"
            offset={2.99}
            speed={6}
            onClick={() => ref.current.scrollTo(2.99)}
          >
            <Lilly />
          </ParallaxLayer>
          <ParallaxLayer
            className="chrysPanel"
            offset={3}
            speed={6}
            onClick={() => ref.current.scrollTo(2.99)}
          >
            <Chrys />
          </ParallaxLayer>
          <ParallaxLayer
            className="chrysPanel"
            offset={3}
            speed={6}
            onClick={() => ref.current.scrollTo(2.99)}
          >
            <h1 id="chrysTitle">
              <Typewriter
                options={{
                  strings: ["Grief", "悲しみ"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={3}
            factor={3}
            id="crhysHelm"
            className="crhysHelm"
            style={{
              backgroundImage: `url(${crhysHelm})`,
              width: "100%",
              height: "100%",
              left: "10%",
              top: "10%",
            }}
          />

          <ParallaxLayer offset={3.99} speed={1}>
            <Outro />
          </ParallaxLayer>
        </div>
        <ParallaxLayer
          offset={4}
          speed={3}
          factor={3}
          id="Button"
          className="Button"
        >
          <Button scrollToRef={ref} />
        </ParallaxLayer>
      </Parallax>
      <div id="detail"></div>
    </div>
  );
}

export default App;
