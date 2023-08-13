import express from "express";
import {
  createReservation,
  dailyReservations,
  deleteMyReservation,
  getReservations,
  latestReservations,
  monthlyReservations,
  myReservations,
  updateReservationStatus,
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
router
  .route("/monthlyreservations")
  .get(isAuthenticatedUser, monthlyReservations);
router
  .route("/latestreservations")
  .get(isAuthenticatedUser, latestReservations);

router.route("/reservations/all").get(isAuthenticatedUser, getReservations);
router
  .route("/reservations/update/:id")
  .put(isAuthenticatedUser, updateReservationStatus);

router.route("/reservation/daily").get(isAuthenticatedUser, dailyReservations);

export default router;
