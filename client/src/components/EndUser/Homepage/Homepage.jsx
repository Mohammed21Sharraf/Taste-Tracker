import React, { useEffect } from "react";
import RestaurantOwner from "./RestaurantOwner/RestaurantOwner";
import Navbar from "../layout/Navbar/Navbar";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Cards from "../layout/RestaurantCard/Cards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      if (user.role === "user") {
        navigate("/userpage");
      } else {
        navigate("/restaurant/dashboard");
      }
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="Homepage">
      <Navbar />
      <Header />
      <Cards />
      <RestaurantOwner />
      <Footer />
    </div>
  );
};

export default Homepage;
