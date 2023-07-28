import React from 'react'
import RestaurantCard from "./RestaurantCard/RestaurantCard";

const TopResView = () => {
  return (
    <div>
      <h3 className="heading align-items-center">All Restaurants</h3>
      <div>Category and Filter</div>
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
        </div>
      </div>
      
    </div>
  )
}

export default TopResView
