import React from "react";
import "./Widget.scss";
import ReviewsIcon from "@mui/icons-material/Reviews";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Widget = ({ type, resData, id }) => {
  let data;

  switch (type) {
    case "complain":
      data = {
        title: "COMPLAINS",
        isMoney: false,
        link: (
          <Link to={`/restaurant/complains/${id}`}>View All reservation</Link>
        ),
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
        link: (
          <Link to={`/restaurant/customer/${id}`}>View All reservation</Link>
        ),
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
        link: <Link to="/restaurant/reservation">View All reservation</Link>,
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
        link: <Link to={`/restaurant/ranking`}>View All ranking</Link>,
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
