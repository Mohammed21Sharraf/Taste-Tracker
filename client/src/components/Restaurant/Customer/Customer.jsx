import React from "react";
import Sidebar from "../layout/Sidebar/Sidebar";
import Navbar from "../layout/Navbar/Navbar.jsx";
import "./Customer.scss";
import Review from "./Review/Review";

const Customer = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <Review/>
      </div>
    </div>
  );
};

export default Customer;
