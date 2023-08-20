import React from "react";
import "./Sidebar.scss";
import Logo from "../../../../img/logo.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import StarsSharpIcon from "@mui/icons-material/StarsSharp";
import EventSeatRoundedIcon from "@mui/icons-material/EventSeatRounded";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ id }) => {
  const navigate = useNavigate();

  function reservation() {
    navigate("/restaurant/reservation");
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img src={Logo} alt="" />
        <span className="logo">TASTE TRACKER</span>
      </div>
      <div className="center">
        <ul>
          <li
            onClick={() => {
              navigate("/restaurant/dashboard");
            }}
          >
            <GridViewRoundedIcon />
            <span>Dashboard</span>
          </li>
          <li
            onClick={() => {
              navigate(`/restaurant/customer/${id}`);
            }}
          >
            <PeopleAltRoundedIcon />
            <span>Customers Review</span>
          </li>
          <li
            onClick={() => {
              navigate("/restaurant/ranking ");
            }}
          >
            <StarsSharpIcon />
            <span>Ranking</span>
          </li>
          <li onClick={reservation}>
            <EventSeatRoundedIcon />
            <span>Reservations</span>
          </li>
          <li
            onClick={() => {
              navigate(`/restaurant/complains/${id}`);
            }}
          >
            <ErrorIcon />
            <span>User Complaints</span>
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
