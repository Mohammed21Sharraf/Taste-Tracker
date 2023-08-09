import React from "react";
import "./Widget.scss";
import ReviewsIcon from "@mui/icons-material/Reviews";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Widget = ({ type, resData }) => {
  let data;

  switch (type) {
    case "complain":
      data = {
        title: "COMPLAINS",
        isMoney: false,
        link: "View All Complains",
        icon: (
          <FeedbackIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "review":
      data = {
        title: "REVIEWS",
        isMoney: true,
        link: "View All Reviews",
        counter: resData,
        icon: (
          <ReviewsIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "reservation":
      data = {
        title: "RESERVATIONS",
        link: "View All Reservations",
        counter: resData,
        icon: (
          <EventSeatIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "ranking":
      data = {
        title: "RANKING",
        link: "View Restaurant Rankings",
        icon: (
          <StarIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.counter}</span>
        <Link style={{ textDecoration: "none" }} className="link">
          {data.link}
        </Link>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
