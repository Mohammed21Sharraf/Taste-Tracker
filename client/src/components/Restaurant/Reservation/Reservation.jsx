import React from "react";
import Sidebar from "../layout/Sidebar/Sidebar";
import Navbar from "../layout/Navbar/Navbar";
import "./Reservation.scss";
import Datatable from "./Datatable/Datatable";

const Reservation = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default Reservation;
