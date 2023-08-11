import React from "react";
import OfferCards from "./OfferCards";
import './OfferView.scss'

const OffersView = () => {
  const offers = [
    {
      _id: 1,
      title: "Restaurant 1",
      description: "Heloooooooooo111",
      image: "",
    },
    {
      _id: 2,
      title: "Restaurant 32",
      description: "Heloooooooooo222",
      image: "",
    },
    {
      _id: 3,
      title: "Restaurant 3",
      description: "Heloooooooooo333",
      image: "",
    },
  ];

  return (
    <div className="container-offer">
      <h3 className="offer-heading">Special Offers</h3>
      <div className="offer-container">
        {offers.map((offer) => (
          <div className="offer-card" key={offer._id}>
            <OfferCards offer={offer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersView;
