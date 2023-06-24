import { Restaurant } from "../models/Restaurant.js";

// Create a new Restaurant -- Restaurant Owner
export const createRestaurant = async (req, res) => {
  try {
    const { name, description, averageOrderValue, category } = req.body;

    const restaurant = await Restaurant.create({
      name,
      description,
      averageOrderValue,
      category,
      user: req.user._id,
    });

    res.status(202).json({
      success: true,
      restaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
