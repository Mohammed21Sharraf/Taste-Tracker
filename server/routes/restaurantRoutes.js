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
  updateReview,
  deleteReview,
  showMyReviews,
} from "../controller/restaurantController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/restaurant/new").post(isAuthenticatedUser, createRestaurant);

router.route("/restaurant/details").get(isAuthenticatedUser, restaurantDetails);
router
  .route("/restaurant/reviews/:id")
  .get(isAuthenticatedUser, restaurantReviews);
router
  .route("/restaurant/update/:id")
  .put(isAuthenticatedUser, restaurantUpdate);

router.route("/restaurant/:id").get(getRestaurantDetails);
router.route("/restaurants").get(getAllRestaurants);
router.route("/restaurants/top").get(getTopRestaurant);
router
  .route("/restaurant/give_review/:id")
  .post(isAuthenticatedUser, createReview);
router
  .route("/restaurant/update-review/:id")
  .put(isAuthenticatedUser, updateReview);
router
  .route("/restaurant/delete-review")
  .delete(isAuthenticatedUser, deleteReview);
router
  .route("/restaurant/user-review/:id")
  .get(isAuthenticatedUser, showMyReviews);

export default router;
