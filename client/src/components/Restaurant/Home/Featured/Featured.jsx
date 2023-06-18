import React from "react";
import "./Featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="left">
        <div className="top">
          <h1 className="title">Total Reviews</h1>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={50} text={"50%"} strokeWidth={5} />
          </div>
          <p className="title">Total Reviews Today</p>
          <p className="amount">3</p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <div className="resultAmount">$12.4k</div>
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
            <CircularProgressbar value={50} text={"50%"} strokeWidth={5} />
          </div>
          <p className="title">Total Reservations Today</p>
          <p className="amount">3</p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
