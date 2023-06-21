import React from "react";
import "./Sidebar.scss";
import Logo from "../../../../img/logo.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import StarsSharpIcon from "@mui/icons-material/StarsSharp";
import EventSeatRoundedIcon from "@mui/icons-material/EventSeatRounded";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import { useNavigate, Link } from "react-router-dom";
// import {Link} from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  function reservation() {
    navigate("/reservation");
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img src={Logo} alt="" />
        <span className="logo">TASTE TRACKER</span>
      </div>
      <div className="center">
        <ul>
          <li onClick={() => {navigate("/")}}>
            <GridViewRoundedIcon />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <li onClick={() => {navigate("/customer")}}>
            <PeopleAltRoundedIcon />
            <span>Customers Review</span>
          </li>
          <li onClick={() => {navigate("/ranking ")}}>
            <StarsSharpIcon />
            <span>Ranking</span>
          </li>
          <li onClick={reservation}>
            <EventSeatRoundedIcon />
            <span>Reservations</span>
          </li>
          <li>
            <SignalCellularAltRoundedIcon />
            <span>Charts</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
