// Updated JSX
import React, { useState, useEffect } from "react";
import "./Reviews.scss";
import "../../../../index.css";
import Grid from "@mui/material/Unstable_Grid2";
import ReviewModal from "../ReviewModal/ReviewModal";
import ReviewCard from "../ReviewCard/ReviewCard";
import axios from "axios";
import { baseURL } from "../../../../api";
import { useParams } from "react-router-dom";
import img from "../../../../img/burger.png";

const Reviews = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState([]);
  const [resData, setResData] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const id = useParams();
  

  // Get Review information
  useEffect(() => {
    axios.get(`${baseURL}/api/v1/restaurant/${id.id}`).then((res) => {
      setResData(res.data.restaurant);
    });

    axios
      .get(`${baseURL}/api/v1/restaurant/reviews/${id.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setReviewData(res.data);
        console.log(res.data);
      });
  }, [updateUI, id]);

  return (
    <div className="Reviews-container">
      <div className="Reviews-header">
        <div className="Reviews-title">
          <h1>{resData.name}</h1>
        </div>
        <div className="Reviews-image-container">
          <img src={img} alt="Restaurant Image" />
        </div>
        <div className="Reviews-info-container">
            <h2 className="Reviews-category-title">Description: </h2>
            <p>{resData.description}</p>
              <h4 className="Reviews-category-title">
                Average Order Value: {resData.averageOrderValue}
              </h4>
              <h4 className="Reviews-category-title">
                Seat Capacity: {resData.capacity}
              </h4>
            <h2 className="Reviews-category-title">Category: </h2>
            {resData.category}
          
        </div>
       
        <div className="Reviews-buttons">
          <div className="Reviews-submit">
            <div className="Reviews-submit-text">
              Share what you feel about the food!
            </div>
            <button className="Reviews-submit-button" onClick={() => setModalOpen(true)}>
              Submit Review
            </button>
          </div>
          <div className="Reviews-reserve-seat">
            <div className="Reviews-reserve-seat-text">Reserve Your Seat Now!</div>
            <button className="Reviews-submit-button">Reserve Seat</button>
          </div>
        </div>
        <hr className="Reviews-hr" />
        <div className="Reviews-reviews">
          <h2 className="Reviews-reviews-title">Reviews</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {reviewData.map((review) => (
              <Grid xs={6} sm={4} md={3} key={review._id}>
                <ReviewCard key={review._id} id={review._id} reviews={review} setUpdateUI={setUpdateUI} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div>
        <ReviewModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </div>
  );
};

export default Reviews;
