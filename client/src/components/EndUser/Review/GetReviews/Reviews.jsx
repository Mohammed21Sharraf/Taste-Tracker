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
import ReservationModal from "../ReservationModal/ReservationModal";

const Reviews = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [resModalOpen, setResModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState([]);
  const [resData, setResData] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const id = useParams();

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
      <div className="Reviews-content-container">
        <div className="Reviews-info-container">
        <h2 className="Reviews-Restaurant-Name">{resData.name}</h2>
          <h2 className="Reviews-category-title">Description: </h2>
          <p>{resData.description}</p>
          <h4 className="Reviews-category-title">
            Average Order Value: 
          </h4>
          <p>{resData.averageOrderValue}</p>
          <h4 className="Reviews-category-title">
            Seat Capacity: 
          </h4>
          <p>{resData.capacity}</p>
          <h2 className="Reviews-category-title">Category: </h2>
          <p>{resData.category}</p>
          <h4 className="Reviews-category-title">
            Average Rating: 
          </h4>
          <p>{resData.rating}</p>
        </div>

        <div className="Reviews-image-container">
          <img src={img} alt="Restaurant" />
        </div>
        </div>

        <div className="Reviews-buttons-outside-container">
        <div className="Reviews-submit">
          <div className="Reviews-submit-text">
            Share what you feel about food!
          </div>
          <button
            className="Reviews-submit-button"
            onClick={() => setModalOpen(true)}
          >
            Submit Review
          </button>
        </div>
        <div className="Reviews-reserve-seat">
          <div className="Reviews-reserve-seat-text">
            Reserve Your Right Seat Now!
          </div>
          <button
            className="Reviews-reserve-seat-button"
            onClick={() => setResModalOpen(true)}
          >
            Reserve Seat
          </button>
        </div>
        <div className="Reviews-complain">
          <div className="Reviews-complain-text">
            Add Your Complain Here
          </div>
          <button
            className="Reviews-complain-button"
            onClick={() => setModalOpen(true)}
          >
            Submit Complain
          </button>
        </div>
      </div>
      
      <h2 className="Reviews-reviews-title">Reviews</h2>
      <div className="Reviews-reviews">
        <Grid
          container
          
        >
          {reviewData.map((review) => (
            <Grid >
              <ReviewCard
                key={review._id}
                id={review._id}
                reviews={review}
                setUpdateUI={setUpdateUI}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      
      <div>
        <ReviewModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
      <div>
        <ReservationModal
          modalOpen={resModalOpen}
          setModalOpen={setResModalOpen}
        />
      </div>
    </div>
  );
};

export default Reviews;
