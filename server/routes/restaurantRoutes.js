import express from "express";
import {
  createRestaurant,
  restaurantDetails,
  restaurantReviews,
  restaurantUpdate,
  createReview,
  getRestaurantDetails,
  getAllRestaurants,
  getTopRestaurant,
  deleteReview,
  createComplain,
  restaurantComplaints,
  deleteComplain,
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

// Restaurant Reviews 
router
  .route("/restaurant/reviews/:id")
  .get(isAuthenticatedUser, restaurantReviews);
router.route("/restaurant/give_review/:id").put(isAuthenticatedUser, createReview);
router.route("/restaurant/delete-review").delete(isAuthenticatedUser, deleteReview);

// Restaurant complaints
router.route("/restaurant/complain/:id").post(isAuthenticatedUser, createComplain);
router.route("/restaurant/all-complains/:id").get(isAuthenticatedUser, restaurantComplaints);
router.route("/restaurant/delete-complain").delete(isAuthenticatedUser, deleteComplain);


export default router;
