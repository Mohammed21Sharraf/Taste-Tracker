import React, { Fragment, useEffect, useState } from "react";
import "./Home.scss";
import Navbar from "../layout/Navbar/Navbar.jsx";
import Sidebar from "../layout/Sidebar/Sidebar.jsx";
import Widget from "./Widget/Widget.jsx";
import Featured from "./Featured/Featured";
import Chart from "./Chart/Chart.jsx";
import TableHome from "./Table/TableHome.jsx";
import axios from "axios";

const Home = () => {
  const [restaurant, setRestaurant] = useState();
  const [reservations, setReservations] = useState();
  const [monthlyReservations, setMonthlyReservations] = useState(1);

  useEffect(() => {
    fetchWidgets();
  }, []);

  // useEffect(() => {
  //   fetchCharts();
  // });

  // useEffect(() => {
  //   fetchTableHome();
  // });

  const fetchWidgets = () => {
    // Populating Widgets
    axios
      .get("http://localhost:4000/api/v1/restaurant/details", {
        withCredentials: true,
      })
      .then((res) => {
        setRestaurant(res.data.details);
      });
  };

  // const fetchTableHome = () => {
  //   // Populating TableHome
  //   axios
  //     .get("http://localhost:4000/api/v1/latestreservations", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setReservations(res.data.reservations);
  //     });
  // };

  // const fetchCharts = () => {
  //   // Populating Charts
  //   axios
  //     .get("http://localhost:4000/api/v1/monthlyreservations", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       setMonthlyReservations(res.data.group);
  //     });
  // };

  console.log(monthlyReservations);

  return (
    <Fragment>
      {monthlyReservations ? (
        <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />

            <div className="widgets">
              <Widget type="complain" />
              <Widget
                type="review"
                resData={restaurant && restaurant[0].numOfReviews}
              />
              <Widget
                type="reservation"
                resData={restaurant && restaurant[0].numOfReservations}
              />
              <Widget type="ranking" />
            </div>

            <div className="charts">
              <Featured />
              {/* <Chart monthlyReservations={monthlyReservations} /> */}
            </div>

            <div className="listContainer">
              <div className="listTitle">Latest Reservations</div>
              <TableHome reservations={reservations && reservations} />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Fragment>
  );
};

export default Home;
