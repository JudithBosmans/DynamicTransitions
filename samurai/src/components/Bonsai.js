import React from "react";
import bonsaiStyle from "../styles/Bonsai.css";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import flowerPic from "../pics/flower.png";

const Bonsai = () => {
  return (
    <div>
      <h1 id="bonsaiTitle">
        <Typewriter
          options={{
            strings: ["Bonsai", "盆栽"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div id="bonsaiPic"></div>

      <div className="flowers">
        <motion.img
          src={flowerPic}
          alt="Your Flower"
          className="flower1"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
        />
        <motion.img
          src={flowerPic}
          alt="Your Flower"
          className="flower2"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        />
        <motion.img
          src={flowerPic}
          alt="Your Flower"
          className="flower3"
          animate={{ rotate: -360 }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
        />
        <motion.img
          src={flowerPic}
          alt="Your Flower"
          className="flower4"
          animate={{ rotate: -360 }}
          transition={{ ease: "linear", duration: 3, repeat: Infinity }}
        />
        <motion.img
          src={flowerPic}
          alt="Your Flower"
          className="flower5"
          animate={{ rotate: -360 }}
          transition={{ ease: "linear", duration: 6, repeat: Infinity }}
        />
      </div>
      <h2 id="bonsaiUndertitle">The training</h2>
      <div id="bonsaiText">
        <p id="bonsaiText1">
          As the child grew, the young samurai's path led it to the art of
          discipline and the nurturing of its spirit. Just like how its grandpa
          meticulously took car of a bonsai tree. The child learned that through
          patience and dedication, it could shape its character and foster inner
          growth. Each branch and leaf of the bonsai mirrored the strength and
          resilience he cultivated within itself.
        </p>
        <p id="bonsaiText2">
          Each branch and leaf of the bonsai mirrored the disciplie and growth
          he cultivated within himself.
        </p>
      </div>
    </div>
  );
};

export default Bonsai;
