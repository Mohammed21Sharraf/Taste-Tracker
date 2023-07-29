import React, { Fragment } from "react";
import "./Userpage.scss";
import Navbar from "../layout/Navbar/Navbar";
import UserHeader from "./Header/UserHeader";
import TopResView from "../Userpage/TopResView.jsx"
import AllResView from "./AllResView/AllResView.jsx"
import Footer from "../layout/Footer/Footer.jsx"

const Userpage = () => {
  return (
    <Fragment>
      <Navbar />
      <UserHeader/>
      <TopResView/>
      <AllResView/>
      <Footer/>
    </Fragment>
  );
};

export default Userpage;
