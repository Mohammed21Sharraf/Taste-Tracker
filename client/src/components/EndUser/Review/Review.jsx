import React, { Fragment } from "react";
import UserNavbar from "../layout/UserNavbar/UserNavbar";
import Reviews from "./GetReviews/Reviews";
import Footer from "../layout/Footer/Footer";

const Review = () => {
  return (
    <Fragment>
      <UserNavbar/>
      <Reviews/>
      <Footer/>
    </Fragment>
  );
};

export default Review;
