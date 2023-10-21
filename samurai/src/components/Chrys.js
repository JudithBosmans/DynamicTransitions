import React, { useState } from "react";
import chrysStyles from "../styles/Chrys.css";

import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import Typewriter from "typewriter-effect";

function Chrys() {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !animationTriggered) {
      setAnimationTriggered(true);
    } else if (!isVisible) {
      setAnimationTriggered(false);
    }
  };

  return (
    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
      {({ isVisible }) => (
        <motion.div
          className="chrysBackground"
          animate={
            animationTriggered
              ? { backgroundColor: "#fff" }
              : { backgroundColor: "#000" }
          }
          transition={{
            duration: 3,
            loop: false,
          }}
        ></motion.div>
      )}
    </VisibilitySensor>
  );
}

export default Chrys;
