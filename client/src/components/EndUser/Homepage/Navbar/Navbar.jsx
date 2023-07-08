import React from 'react'
import './Navbar.scss'
import Logo from '../../../../img/logo.png';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <nav className="Navbar">
        <div className="logo-item">
          <img
              src={Logo}
              alt=""
              onClick={() => {
                navigate("/homepage");
              }}
            />
            <span className='logo'> TASTE TRACKER</span>
          </div>
        <div className="items">
            <div className="item">
              <Link to="/homepage" className='home'>
                <span> Home </span>
              </Link>
            </div>
            <div className="item">
              <Link >
                <span> Restaurants </span>
              </Link>
            </div>
            <div className="item">
              <Link to="/homepage">
                <span> About </span>
              </Link>
            </div>
            <div className="item">
              <Link to="/homepage">
                <span> Sign In </span>
              </Link>
            </div>
          </div>
    </nav>
  )
}

export default Navbar