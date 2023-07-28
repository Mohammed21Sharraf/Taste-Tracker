import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./ParallexView.scss";
import TopResView from "../TopResView";
import AllResView from "../AllResView";
import Navbar from "../Navbar/Navbar.jsx"

const ParallexView = () => {
  return (
    <div className="ParallexView">
      <div className="navbar">
        <Navbar/>
      </div>

      {/* Create a separate wrapper for the parallax effect */}
      <div className="parallax-wrapper">
      <Parallax pages={1} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.5}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
      </Parallax>
      </div>

      <div className="background-white">
        <TopResView />
      </div>
      <div className="background-white">
        <AllResView />
      </div>
    </div>
  );
};

export default ParallexView;