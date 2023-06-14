import React from 'react'
import "./Sidebar.scss";
import Logo from "../../../../img/logo.png";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import StarsSharpIcon from '@mui/icons-material/StarsSharp';
import EventSeatRoundedIcon from '@mui/icons-material/EventSeatRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <img src={Logo} alt="" />
            <span className="logo">TASTE TRACKER</span>
        </div>
        <div className="center">
            <ul>
                <li>
                    <GridViewRoundedIcon/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <PeopleAltRoundedIcon/>
                    <span>Customers Review</span>
                </li>
                <li>
                    <StarsSharpIcon/>
                    <span>Ranking</span>
                </li>
                <li>
                    <EventSeatRoundedIcon/>
                    <span>Reservations</span>
                </li>
                <li>
                    <SignalCellularAltRoundedIcon/>
                    <span>Charts</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar