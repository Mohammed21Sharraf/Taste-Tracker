import express from "express";
import {
  addToWishlist,
  deleteWishlist,
  myWishlist,
} from "../controller/wishlistController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/addtowishlist/:id").post(isAuthenticatedUser, addToWishlist);
router.route("/mywishlist").get(isAuthenticatedUser, myWishlist);
router.route("/deletewishlist/:id").delete(isAuthenticatedUser, deleteWishlist);

export default router;
