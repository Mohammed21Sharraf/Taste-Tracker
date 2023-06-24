import express from "express";
import { createRestaurant, restaurantDetails, restaurantReviews, restaurantUpdate } from "../controller/restaurantController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/restaurant/new").post(isAuthenticatedUser, createRestaurant);
router.route("/restaurant/details").get(isAuthenticatedUser,restaurantDetails);
router.route("/restaurant/reviews").get(isAuthenticatedUser, restaurantReviews);
router.route("/restaurant/update/:id").put(isAuthenticatedUser, restaurantUpdate);

export default router;
