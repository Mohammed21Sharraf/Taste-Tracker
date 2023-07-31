import React from "react";
import Navbar from "../layout/Navbar/Navbar";
import Reviews from "./GetReviews/Reviews";
import Footer from "../layout/Footer/Footer";

const Review = () => {
  return (
    <div className="Review">
      <Navbar />
      <div>
        <Reviews />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
