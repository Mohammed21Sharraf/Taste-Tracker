import express from "express";
import {
  createReservation,
  createRestaurant,
  getRestaurantReservations,
} from "../controller/restaurantController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/restaurant/new").post(isAuthenticatedUser, createRestaurant);
router
  .route("/restaurant/reservations")
  .get(isAuthenticatedUser, getRestaurantReservations);

router.route("/reserver").post(isAuthenticatedUser, createReservation);

export default router;
