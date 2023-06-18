import React from "react";
import "./Home.scss";
import Navbar from "./Navbar/Navbar.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Widget from "./Widget/Widget.jsx";
import Featured from "./Featured/Featured";
import Chart from "./Chart/Chart.jsx";
import TableHome from "./Table/Table.jsx";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="customer" />
          <Widget type="review" />
          <Widget type="reservation" />
          <Widget type="ranking" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Reviews & Reservations</div>
          <TableHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
