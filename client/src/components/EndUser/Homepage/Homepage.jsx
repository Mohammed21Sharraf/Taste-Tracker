import React from "react";
import RestaurantOwner from "./RestaurantOwner/RestaurantOwner";
import Navbar from "../layout/Navbar/Navbar";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Cards from "../layout/RestaurantCard/Cards";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Navbar />
      <Header />
      {/* <Cards /> */}
      <RestaurantOwner />
      <Footer />
    </div>
  );
};

export default Homepage;
