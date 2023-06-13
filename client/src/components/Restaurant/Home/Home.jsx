import React from "react";
import "./Home.scss";
import Widget from "./Widget";

const Home = () => {
  return (
    <div className="home">
      {/* SideBar */}
      <div className="homeContainer">
        {/* Navbar */}
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
