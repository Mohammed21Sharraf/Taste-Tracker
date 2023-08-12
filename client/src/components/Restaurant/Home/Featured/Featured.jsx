import React from "react";
import "./Featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = ({ dailyReservation, dailyReviews }) => {
  const resTotal = 50;
  const resPercent = (dailyReservation / resTotal) * 100;
  const resText = resPercent.toString();

  const revTotal = 25;
  const revPercent = (dailyReviews / revTotal) * 100;
  const revText = revPercent.toString();

  return (
    <div className="featured">
      <div className="left">
        <div className="top">
          <h1 className="title">Total Reviews</h1>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar
              value={revPercent}
              text={revText}
              strokeWidth={5}
            />
          </div>
          <p className="title">Total Reviews Today</p>
          <p className="amount">{dailyReviews}</p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <div className="resultAmount">{revTotal}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <h1 className="title">Total Reservations</h1>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar
              value={resPercent}
              text={resText}
              strokeWidth={5}
            />
          </div>
          <p className="title">Total Reservations Today</p>
          <p className="amount">{dailyReservation}</p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <div className="resultAmount">{resTotal}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
