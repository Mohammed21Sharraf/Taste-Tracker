import express from "express";
import {
  createReservation,
  deleteMyReservation,
  myReservations,
} from "../controller/reservationController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/reserve/:id").post(isAuthenticatedUser, createReservation);
router.route("/reservations/me").get(isAuthenticatedUser, myReservations);
router
  .route("/reservation/delete/:id")
  .delete(isAuthenticatedUser, deleteMyReservation);

export default router;
