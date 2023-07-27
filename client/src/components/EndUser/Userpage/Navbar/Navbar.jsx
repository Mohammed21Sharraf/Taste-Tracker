import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarOpaque, setNavbarOpaque] = useState(false);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setNavbarOpaque(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSearchBar = () => {
    setSearchBarVisible((prevValue) => !prevValue);
  };

  return (
    <nav className={`Navbar ${isNavbarOpaque ? 'opaque' : ''}`}>
      <div className="logo-item">
        <span className="logo">TASTE TRACKER</span>
      </div>
      <div className={`search-bar-container ${isSearchBarVisible ? 'visible' : ''}`}>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="items">
        <div className="item">
          <Link to="/homepage" className="item">
            <span>Home</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/restaurants">
            <span>Restaurants</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/about">
            <span>About</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/signin">
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
