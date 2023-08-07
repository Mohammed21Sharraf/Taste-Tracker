import { Wishlist } from "../models/wishlistModel.js";

// Add to wishlist
export const addToWishlist = async (req, res) => {
  try {
    const { preferredFood } = req.body;

    const wishlist = await Wishlist.create({
      user: req.user._id,
      restaurant: req.params.id,
      preferredFood,
    });

    res.status(202).json({
      success: true,
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// View user wishlist
export const myWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({ user: req.user._id }).populate({
      path: "restaurant",
      select: "name description averageOrderValue logo category",
    });

    res.status(202).json({
      success: true,
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// Delete one from wishlist
export const deleteWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);
    if (!wishlist) {
      return res.status(500).json({
        success: false,
        message: "Wishlist not found",
      });
    }

    await wishlist.deleteOne();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const updatePrefferedFood = async (req, res) => {
  try {
    const { preferredFood } = req.body;

    const prefFood = await Wishlist.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { preferredFood: preferredFood } },
      { new: true, runValidators: true }
    );

    res.status(202).json({
      success: true,
      prefFood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
