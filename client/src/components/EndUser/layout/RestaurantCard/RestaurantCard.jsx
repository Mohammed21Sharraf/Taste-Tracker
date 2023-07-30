import React from "react";
import "./RestaurantCard.scss";
import { Link } from "@mui/material";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`reviews/${restaurant._id}`}
    >
      <div className="card text-center shadow">
        <div className="overflow">
          <img
            src={restaurant.logo}
            alt="Restaurant"
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{restaurant.name}</h4>
          <p
            style={{ textDecoration: "none" }}
            className="card-text text-secondary"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            ipsam!
          </p>

          <a href={`reviews/`+restaurant._id}>
            <button className="explore-button">Explore</button>
          </a>

          <a href="#Wishlist">
            <button className="heart-button">
              <span className="heart-icon">&#9829;</span>
            </button>
          </a>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
