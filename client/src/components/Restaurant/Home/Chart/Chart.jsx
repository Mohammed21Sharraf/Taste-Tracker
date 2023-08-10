import React, { Fragment } from "react";
import "./Chart.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ monthlyReservations }) => {
  let chart = [];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let i = 1;
  let j = 0;
  console.log(monthlyReservations);
  if (monthlyReservations) {
    while (i < 13) {
      if (i === monthlyReservations[j]._id.month) {
        const data = {
          name: months[i - 1],
          Reviews: 0,
          Reservations: monthlyReservations[j].total,
        };
        j += 1;
        chart.push(data);
      } else {
        const data = {
          name: months[i - 1],
          Reviews: 0,
          Reservations: 0,
        };
        i += 1;
        chart.push(data);
      }
    }
  }

  const data = [
    { name: "January", Reviews: 1200, Reservations: 500 },
    { name: "February", Reviews: 2100, Reservations: 500 },
  ];

  return (
    <Fragment>
      {monthlyReservations ? (
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={730}
              height={250}
              data={chart}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Reviews" stroke="#8884d8" />
              <Line type="monotone" dataKey="Reservations" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Fragment>
  );
};

export default Chart;
