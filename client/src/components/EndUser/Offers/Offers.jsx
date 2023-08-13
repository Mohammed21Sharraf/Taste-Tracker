import React, { Fragment } from "react";
import UserNavbar from "../layout/UserNavbar/UserNavbar";
import Footer from "../layout/Footer/Footer";
import OffersView from "./OfferCards/OfferView";

const Offers = () => {
  return (
    <div>
    <Fragment>
      <UserNavbar/>
      <OffersView/>
      <Footer/>
    </Fragment>
      
    </div>
  )
}

export default Offers
