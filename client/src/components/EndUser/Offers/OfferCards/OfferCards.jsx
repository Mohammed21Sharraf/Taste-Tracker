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
          <img src={offer.logo} alt="Offer" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{offer.name}</h4>
          <p className="card-text text-secondary">{offer.offer}</p>

          <a href={`reviews/` + offer._id}>
          <button className="explore-button">
            Explore
          </button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default OfferCards;
