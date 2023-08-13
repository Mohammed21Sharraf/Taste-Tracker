import React from "react";
import Sidebar from "../layout/Sidebar/Sidebar";
import Navbar from "../layout/Navbar/Navbar.jsx";
import "./Customer.scss";
import ReviewTable from "./Review/ReviewTable";

const Customer = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <ReviewTable/>
      </div>
    </div>
  );
};

export default Customer;
