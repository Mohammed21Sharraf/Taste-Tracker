import React from 'react';
import "./RestaurantCard.scss";

const RestaurantCard = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Restaurant" className='card-img-top'/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, ipsam!
        </p>
        
        <a href='#Explore'><button className="explore-button">Explore</button>
        </a>

        <a href='#Wishlist'>
        <button className="heart-button">
          <span className="heart-icon">&#9829;</span>
        </button>
        </a>
        
      </div>   
    </div>
  );
};

export default RestaurantCard;
