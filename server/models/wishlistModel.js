import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  preferredFood: {
    type: String,
    required: true,
  },
});

export const Wishlist = mongoose.model("Wishlist", wishlistSchema);
