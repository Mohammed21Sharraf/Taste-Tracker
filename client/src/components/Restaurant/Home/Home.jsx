import React, { Fragment, useEffect } from "react";
import "./Home.scss";
import Navbar from "../layout/Navbar/Navbar.jsx";
import Sidebar from "../layout/Sidebar/Sidebar.jsx";
import Widget from "./Widget/Widget.jsx";
import Featured from "./Featured/Featured";
import Chart from "./Chart/Chart.jsx";
import TableHome from "./Table/TableHome.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantDetails } from "../../../features/restaurant/restaurantSlice";
import {
  getDailyReservation,
  getLatestReservations,
  getMonthlyReservations,
} from "../../../features/restaurant/reservationSlice";
import { getDailyReviews } from "../../../features/restaurant/reviewSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, restaurant } = useSelector((store) => store.restaurant);
  const {
    resLoading,
    reservations,
    monthlyLoading,
    monthlyReservation,
    dailyReservation,
  } = useSelector((state) => state.reservation);
  const { review } = useSelector((state) => state.review);

  let mainLoading = true;

  useEffect(() => {
    dispatch(getRestaurantDetails());
    dispatch(getLatestReservations());
    dispatch(getMonthlyReservations());
    dispatch(getDailyReservation());
    dispatch(getDailyReviews());
  }, [dispatch]);

  if (loading === false && resLoading === false && monthlyLoading === false) {
    mainLoading = false;
  }
  console.log(restaurant)
  return (
    <Fragment>
      {mainLoading ? (
        <div>Loading</div>
      ) : (
        <Fragment>
          <div className="home">
            <Sidebar id={restaurant[0]._id} />
            <div className="homeContainer">
              <Navbar />

              <div className="widgets">
                {/* <Widget type="complain" id={restaurant[0]._id} resData={restaurant}/> */}
                <Widget
                  type="review"
                  resData={restaurant[0].numOfReviews}
                  id={restaurant[0]._id}
                />
                <Widget
                  type="reservation"
                  resData={restaurant[0].numOfReservations}
                />
                <Widget type="ranking" id={restaurant[0]._id} resData={restaurant[0].points}/>
              </div>

              <div className="charts">
                <Featured
                  dailyReservation={dailyReservation[0].count}
                  dailyReviews={review[0].count}
                />
                <Chart reservations={monthlyReservation} />
              </div>

              <div className="listContainer">
                <div className="listTitle">Latest Reservations</div>
                <TableHome reservations={reservations} />
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
