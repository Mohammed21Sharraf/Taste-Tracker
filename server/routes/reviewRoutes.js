import express from "express";
import { createReview, deleteReview, getBestReviews, getReview, getWorstReviews, updateReview } from "../controller/reviewController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/reviews/:id").post(isAuthenticatedUser, createReview);
router.route("/review/delete/:id").delete(isAuthenticatedUser, deleteReview);
router.route("/review/update/:id").post(isAuthenticatedUser, updateReview);
router.route("/review/details/:id").get(isAuthenticatedUser, getReview);
router.route("/review/highest-rating/:id").get(isAuthenticatedUser, getBestReviews);
router.route("/review/worst-rating/:id").get(isAuthenticatedUser, getWorstReviews);

export default router;
