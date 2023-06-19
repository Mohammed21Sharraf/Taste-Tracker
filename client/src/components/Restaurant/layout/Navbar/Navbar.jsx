import React from 'react'
import "./Navbar.scss";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="items">
                <div className="item">
                    <NotificationsNoneRoundedIcon/>
                    Notifications
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar