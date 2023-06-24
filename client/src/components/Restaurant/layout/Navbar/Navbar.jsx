import React from "react";
import "./Navbar.scss";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import DP from "../../../../img/M1syl.jpeg";

import {useNavigate, Link} from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="items">
                    <div className="item">
                        <LanguageRoundedIcon className='icon'/>
                        English
                    </div>
                    <div className="item">
                        <FullscreenExitRoundedIcon/>
                        {/* Fullscreen */}
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon/>
                        {/* Fullscreen */}
                    </div>
                    <div className="item">
                        <NotificationsNoneRoundedIcon/>
                        {/* Notifications */}
                    </div>
                    <div className="item">
                        <Link to="/login">
                            <LogoutRoundedIcon />
                        </Link>
                    </div>
                    <div className="item">
                        <img src={DP} 
                            alt="" 
                            className='avatar'
                            onClick={() => {navigate("/profile")}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;