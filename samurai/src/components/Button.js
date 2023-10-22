import React, { useEffect, useRef } from "react";
import styles from "../styles/Button.css";
import { Link } from "react-router-dom";

import gsap from "gsap";
import GsapFile from "./Gsap";
import Gsap from "./Gsap";

const Button = ({ scrollToRef }) => {
  const handleScroll = (offset) => {
    scrollToRef.current.scrollTo(offset);
  };

  return (
    <main id="main">
      <h1 id="buttonTitle1">The end</h1>
      <h1 id="buttonTitle2">Revisit the story</h1>
      <div id="container">
        <Gsap>
          <p
            className="text"
            id="Layer_2"
            data-name="Layer 2"
            onClick={() => handleScroll(0)}
          >
            HOME
          </p>
        </Gsap>
        <Gsap>
          <p
            className="text"
            id="Layer_2"
            data-name="Layer 2"
            onClick={() => handleScroll(1)}
          >
            CHERRY BLOSSOMS
          </p>
        </Gsap>
        <Gsap>
          <p
            className="text"
            id="Layer_2"
            data-name="Layer 2"
            onClick={() => handleScroll(1.99)}
          >
            BONSAI
          </p>
        </Gsap>
        <Gsap>
          <p
            className="text"
            id="Layer_2"
            data-name="Layer 2"
            onClick={() => handleScroll(2)}
          >
            RED CHAMOMILE
          </p>
        </Gsap>
        <Gsap>
          <p
            className="text"
            id="Layer_2"
            data-name="Layer 2"
            onClick={() => handleScroll(2)}
          >
            SPIDER LILLY
          </p>
        </Gsap>
        <Gsap>
          <p
            className="text"
            id="Layer_2"
            data-name="Layer 2"
            onClick={() => handleScroll(3)}
          >
            WHITE CHRYSANTHIUM
          </p>
        </Gsap>
      </div>
    </main>
  );
};

export default Button;
