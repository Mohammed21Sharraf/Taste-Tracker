import React, { useEffect, useState } from "react";
import OfferCards from "./OfferCards";
import './OfferView.scss'
import axios from "axios";
import { baseURL } from "../../../../api";

const OffersView = () => {
  // const offers = [
  //   {
  //     _id: 1,
  //     title: "Restaurant 1",
  //     description: "Heloooooooooo111",
  //     image: "",
  //   },
  //   {
  //     _id: 2,
  //     title: "Restaurant 32",
  //     description: "Heloooooooooo222",
  //     image: "",
  //   },
  //   {
  //     _id: 3,
  //     title: "Restaurant 3",
  //     description: "Heloooooooooo333",
  //     image: "",
  //   },
  // ];

  const [offerData, setOfferData] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(()=>{
    axios.get(`${baseURL}/api/v1/restaurants/offers`, {
      withCredentials: true,
    })
    .then((res) => {
      setOfferData(res.data.newRes);
      setUpdateUI((prev)=>!prev);
    });
  }, [updateUI])


  return (
    <div className="container-offer">
      <h3 className="offer-heading">Special Offers</h3>
      <div className="offer-container">
        {offerData.map((offer) => (
          <div className="offer-card">
            <OfferCards offer={offer} key={offer._id}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersView;
