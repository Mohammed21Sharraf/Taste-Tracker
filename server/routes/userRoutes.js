import express from "express";
import {
  register,
  login,
  logout,
  getUserDetails,
} from "../controller/userController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);

export default router;
