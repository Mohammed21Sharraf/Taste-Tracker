import React, { Fragment, useEffect, useState } from "react";
import "./Wishlist.scss";
import UserNavbar from "../layout/UserNavbar/UserNavbar";
import WishlistCard from "./WishlistCard/WishlistCard";
import Footer from "../layout/Footer/Footer";
import axios from "axios";
import { baseURL } from "../../../api";
import { Grid } from "@mui/material";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${baseURL}/api/v1/mywishlist`, { withCredentials: true })
      .then((res) => {
        setWishlist(res.data.wishlist);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${baseURL}/api/v1/deletewishlist/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        fetchData();
      });
  };

  const handleUpdate = (id, preferredFood) => {
    console.log(id, preferredFood);
    axios
      .put(
        `${baseURL}/api/v1/updatewishlist/${id}`,
        { preferredFood },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <UserNavbar />
      <div className="your-wishlist">
        <h1>Your Wishlist</h1>
      </div>
      <div className="wishlist-container">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {wishlist.map((item) => (
            <Grid item xs={2} sm={4} md={3} key={item._id}>
              <WishlistCard
                wishlist={item}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
