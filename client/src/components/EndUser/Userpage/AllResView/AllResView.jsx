import React, { useEffect, useState } from "react";
import RestaurantCard from "../../layout/RestaurantCard/RestaurantCard";
import "./AllResView.scss";
import axios from "axios";
import { baseURL } from "../../../../api.js";
import Pagination from "react-js-pagination";

const AllResView = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [averageOrderValue, setAverageOrderValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [datas, setData] = useState([]);
  const [resCount, setResCount] = useState(0);
  const [resultPerPage, setResultPerPage] = useState(0);
  const [filteredlength, setFilteredlength] = useState(0);
  const [updateUI, setUpdateUI] = useState(false);

  let link;
  if (selectedCategory === "All") {
    link = `${baseURL}/api/v1/restaurants?averageOrderValue[gte]=${averageOrderValue}&page=${currentPage}`;
  } else {
    link = `${baseURL}/api/v1/restaurants?averageOrderValue[gte]=${averageOrderValue}&category=${selectedCategory}&page=${currentPage}`;
  }

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSliderChange = (event) => {
    setAverageOrderValue(event.target.value);
  };

  useEffect(() => {
    axios.get(link).then((res) => {
      setData(res.data.restaurants);
      setResCount(res.data.restaurantCount);
      setResultPerPage(res.data.resultPerPage);
      setFilteredlength(res.data.filteredlength);
    });
  }, [updateUI, link]);

  // https://stackoverflow.com/questions/42391499/react-render-new-row-every-4th-column
  const rows = [...Array(Math.ceil(datas.length / 5))];
  const resRows = rows.map((row, idx) => datas.slice(idx * 5, idx * 5 + 5));
  const content = resRows.map((row, idx) => (
    <div class="row" key={idx}>
      {row.map((data) => (
        <div class="col" setUpdateUI={setUpdateUI}>
          <RestaurantCard key={data._id} restaurant={data} />
        </div>
      ))}
    </div>
  ));

  let count = filteredlength;

  return (
    <div>
      <h3 className="heading align-items-center">All Restaurants</h3>
      <div className="category-filter">
        <div className="category">
          <div
            className={`option ${selectedCategory === "All" ? "selected" : ""}`}
            onClick={() => handleCategoryClick("All")}
          >
            All
          </div>
          <div
            className={`option ${
              selectedCategory === "Chinese" ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("Chinese")}
          >
            Chinese
          </div>
          <div
            className={`option ${
              selectedCategory === "Italian" ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("Italian")}
          >
            Italian
          </div>
          <div
            className={`option ${
              selectedCategory === "Fastfood" ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("Fastfood")}
          >
            Fastfood
          </div>
          <div
            className={`option ${
              selectedCategory === "French" ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("French")}
          >
            French
          </div>
        </div>
        <div className="filter">
          <div
            className={`option ${
              selectedFilter === "Average Order Value" ? "selected" : ""
            }`}
            onClick={() => handleFilterClick("Average Order Value")}
          >
            Average Order Value
          </div>
        </div>
      </div>
      {selectedFilter === "Average Order Value" && (
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="10000"
            value={averageOrderValue}
            onChange={handleSliderChange}
            step="1"
            className="slider-bar"
          />
          <div className="slider-value">{averageOrderValue}</div>
        </div>
      )}
      <div className="container-fluid d-flex flex-column align-items-center">
        {content}
      </div>

      {resultPerPage <= count && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={resCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
    </div>
  );
};

export default AllResView;
