import React, { Fragment, useState } from 'react';
import './Wishlist.scss';
import UserNavbar from '../layout/UserNavbar/UserNavbar';

const Wishlist = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: 'Restaurant A',
      preferredFood: 'Italian',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Restaurant B',
      preferredFood: 'Chinese',
      rating: 4.2,
    },

    {
      id: 3,
      name: 'Restaurant C',
      preferredFood: 'Indian',
      rating: 1.7,
    },
    {
      id: 4,
      name: 'Restaurant D',
      preferredFood: 'Bengali',
      rating: 2.7,
    },
    
  ]);

  const handlePreferredFoodChange = (id, newValue) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, preferredFood: newValue } : restaurant
      )
    );
  };

  return (
    <>
      <UserNavbar/>
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <table className="wishlist-table">
        <thead>
          <tr>
            <th className="white-text">Name of Restaurant</th>
            <th className="white-text">Preferred Food</th>
            <th className="white-text">Rating</th>
            <th>Make Reservation</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>
                <div className="preferred-food-container">
                  <input
                    type="text"
                    placeholder="Enter"
                    value={restaurant.preferredFood}
                    onChange={(e) => handlePreferredFoodChange(restaurant.id, e.target.value)}
                  />
                </div>
              </td>
              <td>{restaurant.rating}</td>
              <td>
                <button className="reservation-btn white-text">Reserve</button>
              </td>
              <td>
                <button className="delete-btn white-text">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Wishlist;
