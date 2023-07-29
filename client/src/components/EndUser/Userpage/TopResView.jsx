import React, { useEffect, useState } from "react";
import RestaurantCard from "../layout/RestaurantCard/RestaurantCard";
import axios from "axios";
import { baseURL } from "../../../api.js";

const TopResView = () => {
  const [datas, setData] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/api/v1/restaurants/top`).then((res) => {
      setData(res.data.restaurants);
    });
  }, [updateUI]);

  return (
    <div>
      <div className="container-fluid d-flex flex-column align-items-center">
        <h3 className="heading align-items-center">Top Restaurants</h3>
        <div className="row">
          {datas &&
            datas.map((data) => (
              <div class="col" setUpdateUI={setUpdateUI}>
                <RestaurantCard key={data._id} restaurant={data} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopResView;
