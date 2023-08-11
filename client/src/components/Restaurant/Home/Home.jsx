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
  getLatestReservations,
  getMonthlyReservations,
} from "../../../features/restaurant/reservationSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, restaurant } = useSelector((store) => store.restaurant);
  const { resLoading, reservations, monthlyLoading, monthlyReservation } =
    useSelector((state) => state.reservation);
  let mainLoading = true;

  useEffect(() => {
    dispatch(getRestaurantDetails());
    dispatch(getLatestReservations());
    dispatch(getMonthlyReservations());
  }, [dispatch]);

  if (loading === false && resLoading === false && monthlyLoading === false) {
    mainLoading = false;
  }

  return (
    <Fragment>
      {mainLoading ? (
        <div>Loading</div>
      ) : (
        <Fragment>
          <div className="home">
            <Sidebar />
            <div className="homeContainer">
              <Navbar />

              <div className="widgets">
                <Widget type="complain" />
                <Widget type="review" resData={restaurant[0].numOfReviews} />
                <Widget
                  type="reservation"
                  resData={restaurant[0].numOfReservations}
                />
                <Widget type="ranking" />
              </div>

              <div className="charts">
                <Featured />
                <Chart />
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
