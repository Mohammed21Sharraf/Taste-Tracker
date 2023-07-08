import React, {  useEffect, useState } from "react";
import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { createRestaurant } from "../../../../features/restaurant/restaurantSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantDescription, setRestaurantDescription] = useState("");
  const [averageOrderValue, setAverageOrderValue] = useState(500);
  const [logo, setLogo] = useState("");
  const [category, setCategory] = useState("");
  const [seatCapacity, setSeatCapacity] = useState(30);

  const { loading } = useSelector((store) => store.restaurant);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSliderChange = (e) => {
    setAverageOrderValue(e.target.value);
  };

  const handleNumericInputChange = (e) => {
    const numericValue = parseFloat(e.target.value);
    setAverageOrderValue(numericValue || "");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      restaurantName,
      restaurantDescription,
      averageOrderValue,
      category,
      seatCapacity,
    };
    dispatch(createRestaurant(formData));
  };

  useEffect(() => {
    if (loading === false) {
      navigate("/restaurant/dashboard");
    }
  });

  return (
    <div className="page-container">
      <div className="left-section">
        <div className="circle"></div>
      </div>
      <div className="form-container">
        <h2 className="form-title">Restaurant Information</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-field">
            <label htmlFor="restaurantName">Restaurant Name</label>
            <input
              type="text"
              id="restaurantName"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="restaurantDescription">
              Restaurant Description
            </label>
            <textarea
              id="restaurantDescription"
              value={restaurantDescription}
              onChange={(e) => setRestaurantDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="form-field">
            <label htmlFor="seatCapacity">Seat Capacity</label>
            <input
              type="number"
              id="seatCapacity"
              value={seatCapacity}
              onChange={(e) => setSeatCapacity(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="averageOrderValue">Average Order Value</label>
            <div className="range-input-container">
              <input
                type="range"
                id="averageOrderValue"
                value={averageOrderValue}
                min="0"
                max="1000"
                step="1"
                onChange={handleSliderChange}
                required
              />
              <input
                type="number"
                id="averageOrderValueNumeric"
                value={averageOrderValue}
                min="0"
                max="10000"
                step="1"
                onChange={handleNumericInputChange}
                required
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="logo">Logo</label>
            <div className="file-input-container">
              <label className="custom-file-input">
                Upload Logo Here
                <input
                  type="file"
                  id="logo"
                  onChange={(e) => setLogo(e.target.files[0])}
                />
              </label>
              <span className="file-name">{logo && logo.name}</span>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Submit" className="submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default Form;
