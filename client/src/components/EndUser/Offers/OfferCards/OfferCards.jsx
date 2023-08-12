import React, { useState } from "react";
import "./OfferCards.scss";

const OfferCards = ({ offer }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
    setId(offer._id);
  };

  return (
    <div className="card">
      <div className="ribbon">
        <span className="ribbon-text">Discount</span>
      </div>
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={offer.image} alt="Offer" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{offer.name}</h4>
          <p className="card-text text-secondary">{offer.offer}</p>

          <button className="explore-button" onClick={handleClick}>
            Explore
          </button>

          <button className="heart-button" onClick={handleClick}>
            <span className="heart-icon">&#9829;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCards;
