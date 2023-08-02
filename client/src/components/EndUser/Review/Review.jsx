import React from "react";
import UserNavbar from "../layout/UserNavbar/UserNavbar";
import Reviews from "./GetReviews/Reviews";
import Footer from "../layout/Footer/Footer";

const Review = () => {
  return (
    <div className="Review">
      <UserNavbar />
      <div>
        <Reviews />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Review;
