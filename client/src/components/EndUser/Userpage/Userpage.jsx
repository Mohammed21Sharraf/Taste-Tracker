import React, { Fragment } from "react";
import "./Userpage.scss";
import Navbar from "../layout/Navbar/Navbar";
import ParallexView from "./ParallexView/ParallexView.jsx";

const Userpage = () => {
  return (
    <Fragment>
      <Navbar />
      <ParallexView />
    </Fragment>
  );
};

export default Userpage;
