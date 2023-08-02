import React, { useState, useEffect } from "react";
import "./UserNavbar.scss";
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const [isNavbarMaroon, setNavbarMaroon] = useState(true);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/userpage/${keyword}`);
    } else {
      navigate("/userpage");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setNavbarMaroon(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`UserNavbar ${isNavbarMaroon ? "maroon" : ""}`}>
      <div className="logo-item">
        <span className={`logo ${isNavbarMaroon ? "white-text" : ""}`}>TASTE TRACKER</span>
      </div>
      <form className={`search-bar-container ${isNavbarMaroon ? "maroon-text" : ""}`} onSubmit={searchSubmitHandler}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search a Restaurant"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <div className={`items ${isNavbarMaroon ? "maroon-text" : ""}`}>
        <div className="item">
          <Link to="/homepage" className="item-link">
            <span>Home</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/restaurants" className="item-link">
            <span>Restaurants</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/about" className="item-link">
            <span>About</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/signin" className="item-link">
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
