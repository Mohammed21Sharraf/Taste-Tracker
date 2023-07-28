import React, { useState } from "react";
import RestaurantCard from "../../layout/RestaurantCard/RestaurantCard";
import "./AllResView.scss";

const AllResView = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [averageOrderValue, setAverageOrderValue] = useState(50);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedFilter(null);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setSelectedCategory(null);
  };

  const handleSliderChange = (event) => {
    setAverageOrderValue(event.target.value);
  };

  return (
    <div>
      <h3 className="heading align-items-center">All Restaurants</h3>
      <div className="category-filter">
        <div className="category">
          <div
            className={`option ${selectedCategory === "Chinese" ? "selected" : ""}`}
            onClick={() => handleCategoryClick("Chinese")}
          >
            Chinese
          </div>
          <div
            className={`option ${selectedCategory === "Italian" ? "selected" : ""}`}
            onClick={() => handleCategoryClick("Italian")}
          >
            Italian
          </div>
          <div
            className={`option ${selectedCategory === "Fastfood" ? "selected" : ""}`}
            onClick={() => handleCategoryClick("Fastfood")}
          >
            Fastfood
          </div>
          <div
            className={`option ${selectedCategory === "French" ? "selected" : ""}`}
            onClick={() => handleCategoryClick("French")}
          >
            French
          </div>
        </div>
        <div className="filter">
          <div
            className={`option ${selectedFilter === "Average Order Value" ? "selected" : ""}`}
            onClick={() => handleFilterClick("Average Order Value")}
          >
            Average Order Value
          </div>
        </div>
      </div>
          {selectedFilter === "Average Order Value" && (
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="1000"
          value={averageOrderValue}
          onChange={handleSliderChange}
          step="1"
          className="slider-bar"
        />
        <div className="slider-value">{averageOrderValue}</div>
      </div>
    )}
      <div className="container-fluid d-flex flex-column align-items-center">
        <div className="row">
          <div class="col">
            <RestaurantCard />
          </div>
          <div class="col">
            <RestaurantCard />
          </div>
          <div class="col">
            <RestaurantCard />
          </div>
          <div class="col">
            <RestaurantCard />
          </div>
        
        
          <div class="col">
            <RestaurantCard />
          </div>
          <div class="col">
            <RestaurantCard />
          </div>
          <div class="col">
            <RestaurantCard />
          </div>
          <div class="col">
            <RestaurantCard />
          </div>
          <div class="col">
            <RestaurantCard />
          </div>
          <div class="col">
            <RestaurantCard />
          </div>
          <div class="col">
            <RestaurantCard />
          </div>
          <div class="col">
            <RestaurantCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllResView;
