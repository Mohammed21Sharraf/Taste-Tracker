import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpaque, setNavbarOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond the first page (offset 0) of the Parallax view
      const isScrolled = window.scrollY > window.innerHeight;
      setNavbarOpaque(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`Navbar ${isNavbarOpaque ? "opaque" : ""}`}>
      <div className="logo-item">
        <span className={`logo ${isNavbarOpaque ? "maroon-text" : ""}`}>TASTE TRACKER</span>
      </div>
      <div className={`search-bar-container ${isNavbarOpaque ? "maroon-text" : ""}`}>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={`items ${isNavbarOpaque ? "maroon-text" : ""}`}>
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
        <div className={`item ${!isNavbarOpaque ? "white-text" : ""}`}>
          <Link to="/signin">
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
