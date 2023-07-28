import React from "react";
import RestaurantCard from "../layout/RestaurantCard/RestaurantCard";

const TopResView = () => {
  return (
    <div>
      <div className="container-fluid d-flex flex-column align-items-center">
        <h3>Top Restaurants</h3>
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
        </div>
      </div>
    </div>
  );
};

export default TopResView;
