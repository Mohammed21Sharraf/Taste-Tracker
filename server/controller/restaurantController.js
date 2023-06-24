import { Restaurant } from "../models/restaurantModel.js";

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

// Get all reservation of a specific restaurant - Restaurant Owner
export const getRestaurantReservations = async (req, res) => {
  try {
    const restaurant = await Restaurant.find({ user: req.user._id });
    const reservation = restaurant[0].reservation;
    res.status(200).json({
      success: true,
      reservation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const createReservation = async (req, res) => {
  const { seatsBooked } = req.body;
  const reservation = {
    user: req.user._id,
    name: req.user.name,
    seatsBooked: seatsBooked,
    time: Date.now(),
    day: Date.now(),
  };

  const restaurant = await Restaurant.find();

  restaurant[0].reservation.push(reservation);

  await restaurant[0].save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    restaurant,
  });
};
