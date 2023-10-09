import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Typewriter from "typewriter-effect/dist/core";

function App() {
  useEffect(() => {
    var titelType = document.getElementById("titelType");

    var typewriter = new Typewriter(titelType, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(2000)
      .typeString("A Samurai Story")
      .pauseFor(2000)
      .deleteChars(15)
      .typeString("サムライの物語")
      .pauseFor(2000)
      .start();

    return () => {
      // Clean up the Typewriter instance when the component unmounts
      typewriter.stop();
    };
  }, []);

  return (
    <div>
      <div className="helm"></div>
      <h1 id="titelType">A Samurai Story</h1>
      <p className="undertitle">Told with Hanakotoba</p>
    </div>
  );
}

export default App;
