import React from "react";
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

const Chart = () => {
  const data = [
    { name: "January", Reviews: 1200, Reservations: 500 },
    { name: "February", Reviews: 2100, Reservations: 500 },
    { name: "March", Reviews: 800, Reservations: 500 },
    { name: "April", Reviews: 1600, Reservations: 500 },
    { name: "May", Reviews: 900, Reservations: 500 },
    { name: "June", Reviews: 1700, Reservations: 500 },
  ];

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={730}
          height={250}
          data={data}
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
  );
};

export default Chart;
