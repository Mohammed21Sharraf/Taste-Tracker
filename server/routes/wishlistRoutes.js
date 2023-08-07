import express from "express";
import {
  addToWishlist,
  deleteWishlist,
  myWishlist,
  updatePrefferedFood,
} from "../controller/wishlistController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/addtowishlist/:id").post(isAuthenticatedUser, addToWishlist);
router.route("/mywishlist").get(isAuthenticatedUser, myWishlist);
router.route("/deletewishlist/:id").delete(isAuthenticatedUser, deleteWishlist);
router
  .route("/updatewishlist/:id")
  .put(isAuthenticatedUser, updatePrefferedFood);

export default router;
