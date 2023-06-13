import React from "react";
import "./Home.scss";
import Navbar from "./Navbar/Navbar.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Widget from "./Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets"></div>
        <Widget type="customer" />
        <Widget type="review" />
        <Widget type="reservation" />
        <Widget type="ranking" />
      </div>
    </div>
  );
};

export default Home;
