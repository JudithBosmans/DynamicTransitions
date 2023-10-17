import React, { useEffect, useState, useRef } from "react";
import cherryStyle from "../styles/Cherry.css";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const circleVariants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 0.5, 0.5, 1, 1, 0.5, 0.5, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
    },
  },
  hover: {
    scale: 1.2,
  },
  tap: {
    scale: 0.9,
  },
};

const FlowerAnimation = () => {
  const numberOfFlowers = 8;

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const flowers = [];

  for (let i = 0; i < numberOfFlowers; i++) {
    const randomX = Math.floor(Math.random() * windowDimensions.width);
    const randomY = Math.floor(Math.random() * windowDimensions.height);

    flowers.push(
      <motion.svg
        key={i}
        width="600"
        height="600"
        viewBox="0 0 600 600"
        style={{ position: "absolute", top: randomY, left: randomX }}
      >
        flowers.push(
        <motion.svg
          key={i}
          width="600"
          height="600"
          viewBox="0 0 600 600"
          style={{ position: "absolute", top: randomY, left: randomX }}
        >
          <motion.circle
            cx="350"
            cy="300"
            r="20"
            stroke="#E17F93"
            strokeWidth="2"
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            variants={circleVariants}
          />
          <motion.circle
            cx="290"
            cy="300"
            r="20"
            stroke="#E17F93"
            strokeWidth="2"
            initial="hidden"
            animate="visible"
            scale={(1, 2, 2, 1, 1)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            variants={circleVariants}
          />
          <motion.circle
            cx="320"
            cy="330"
            r="20"
            stroke="#E17F93"
            strokeWidth="2"
            initial="hidden"
            animate="visible"
            scale={(1, 2, 2, 1, 1)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            variants={circleVariants}
          />
          <motion.circle
            cx="320"
            cy="270"
            r="20"
            stroke="#E17F93"
            strokeWidth="2"
            initial="hidden"
            animate="visible"
            scale={(1, 2, 2, 1, 1)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            variants={circleVariants}
          />
        </motion.svg>
        )
      </motion.svg>
    );
  }

  return (
    <div>
      {flowers}
      <h1 id="cherryTitle">
        <Typewriter
          options={{
            strings: ["Cherry blossom", "桜の花"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h2 id="cherryUndertitle">The birth</h2>
      <div id="cherryText">
        <p id="cherryText1">
          In a tranquil village nestled beneath the snow-capped mountains, a child
          was born. Cherry blossoms were floating through the air. From its
          earliest days, it learned the importance of life's fragility,
          understanding that like the cherry blossoms, life is beautiful but
          fleeting.
        </p>
        <p id="cherryText2">
          With every gust of wind that carried away the delicate blooms, he
          embraced the moral values that would guide him on his path. It soon
          became clear that this child would go on to become a samurai.
        </p>
      </div>
    </div>
  );
};

const Cherry = () => {
  return (
    <div className="cherryBody">
      <FlowerAnimation />
    </div>
  );
};

export default Cherry;
