import React, { Fragment } from "react";
import "./Userpage.scss";
import RestaurantCard from "./RestaurantCard/RestaurantCard";

const Userpage = () => {
  return (
    <Fragment>
      <div className="navbar">Navbar</div>
      <div className="header">Header</div>
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
          {/* <div class="col">
            <RestaurantCard />
          </div> */}
        </div>
      </div>

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
        </div>
      </div>
    </Fragment>
  );
};

export default Userpage;
