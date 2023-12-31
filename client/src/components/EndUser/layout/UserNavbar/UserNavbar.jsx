import React, { useState } from "react";
import "./UserNavbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser } from "../../../../features/user/userSlice";
import axios from "axios";

const UserNavbar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/userpage/${keyword}`);
    } else {
      navigate("/userpage");
    }
  };

  const handleSignOut = () => {
    axios
      .get("http://localhost:4000/api/v1/logout", { withCredentials: true })
      .then(() => {
        dispatch(loadUser());
        navigate("/homepage");
      });
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
          <Link to="/" className="item-link">
            <span>Home</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/offers" className="item-link">
            <span>Offers</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/wishlist" className="item-link">
            <span>Wishlist</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/reservations" className="item-link">
            <span>Reservations</span>
          </Link>
        </div>

        <div className="item">
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
