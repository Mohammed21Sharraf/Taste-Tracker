import express from "express";
import {
  createReservation,
  createRestaurant, restaurantDetails, restaurantReviews, restaurantUpdate,
  getRestaurantReservations,
  createReview,
} from "../controller/restaurantController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/restaurant/new").post(isAuthenticatedUser, createRestaurant);
router
  .route("/restaurant/reservations")
  .get(isAuthenticatedUser, getRestaurantReservations);

router.route("/reserver").post(isAuthenticatedUser, createReservation);
router.route("/restaurant/details").get(isAuthenticatedUser,restaurantDetails);
router.route("/restaurant/reviews/:id").get(isAuthenticatedUser, restaurantReviews);
router.route("/restaurant/update/:id").put(isAuthenticatedUser, restaurantUpdate);
router.route("/restaurant/give_review/:id").post(isAuthenticatedUser, createReview);

export default router;
