import express from "express";
import {
  createReservation,
  deleteMyReservation,
  monthlyReservations,
  myReservations,
} from "../controller/reservationController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();
// User Page Routes
router.route("/reserve/:id").post(isAuthenticatedUser, createReservation);
router.route("/reservations/me").get(isAuthenticatedUser, myReservations);
router
  .route("/reservation/delete/:id")
  .delete(isAuthenticatedUser, deleteMyReservation);

// Restaurant Owner routes
router.route("/monthlyreservations").get(monthlyReservations);

export default router;
