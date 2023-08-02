import React, { useState } from "react";
import "./UserNavbar.scss";
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
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

  return (
    <nav className="UserNavbar">
      <div className="logo-item">
        <span className="logo">TASTE TRACKER</span>
      </div>
      <form className="search-bar-container" onSubmit={searchSubmitHandler}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search a Restaurant"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <div className="items">
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
