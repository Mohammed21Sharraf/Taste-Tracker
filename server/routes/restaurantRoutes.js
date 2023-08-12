import express, { Router } from "express";
import {
  createRestaurant,
  restaurantDetails,
  // restaurantReviews,
  restaurantUpdate,
  // createReview,
  getRestaurantDetails,
  getAllRestaurants,
  getTopRestaurant,
  // deleteReview,
  createComplain,
  restaurantComplaints,
  // deleteComplain,
  getRanksOfRestaurants,
  getOffers,
} from "../controller/restaurantController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/restaurant/new").post(isAuthenticatedUser, createRestaurant);

router.route("/restaurant/details").get(isAuthenticatedUser, restaurantDetails);
router
  .route("/restaurant/update/:id")
  .put(isAuthenticatedUser, restaurantUpdate);

router.route("/restaurant/:id").get(getRestaurantDetails);
router.route("/restaurants").get(getAllRestaurants);
router.route("/restaurants/top").get(getTopRestaurant);

// Offer Route 
router.route("/restaurants/offers").get(isAuthenticatedUser, getOffers);

// Restaurant complaints
router.route("/restaurant/complain/:id").post(isAuthenticatedUser, createComplain);
router.route("/restaurant/all-complains/:id").get(isAuthenticatedUser, restaurantComplaints);
// router.route("/restaurant/delete-complain").delete(isAuthenticatedUser, deleteComplain);

router.route("/restaurants/rankings").get(isAuthenticatedUser, getRanksOfRestaurants);


export default router;
