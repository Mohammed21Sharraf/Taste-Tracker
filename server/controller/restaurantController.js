import { Restaurant } from "../models/restaurantModel.js";
import ApiFeatures from "../utils/apifeatures.js";

// Create a new Restaurant -- Restaurant Owner
export const createRestaurant = async (req, res) => {
  try {
    const {
      restaurantName,
      restaurantDescription,
      averageOrderValue,
      category,
      seatCapacity,
      rating,
      logo,
    } = req.body;

    const restaurant = await Restaurant.create({
      name: restaurantName,
      description: restaurantDescription,
      averageOrderValue: averageOrderValue,
      category: category,
      capacity: seatCapacity,
      user: req.user._id,
      ratings: rating,
      logo: logo,
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

// Create Reservation - User
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

// Get Restaurant Details
export const restaurantDetails = async (req, res) => {
  const id = req.user._id;

  try {
    const details = await Restaurant.find({ user: id });
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get Restaurant Review
export const restaurantReviews = async (req, res) => {
  const id = req.user._id;

  try {
    const reviews = await Restaurant.find({ user: id }).select("reviews");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Restaurant profile
export const restaurantUpdate = async (req, res) => {
  const id = req.user._id;
  try {
    const restaurant = await Restaurant.find({ user: id });
    if (restaurant) {
      const updateDetails = await Restaurant.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updateDetails);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all restaurants
export const getAllRestaurants = async (req, res) => {
  try {
    const resultPerPage = 5;
    const restaurantCount = await Restaurant.countDocuments();

    const apiFeatures = new ApiFeatures(Restaurant.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);

    const restaurants = await apiFeatures.query;
    const filteredlength = restaurants.length;

    res.status(202).json({
      success: true,
      restaurants,
      restaurantCount,
      resultPerPage,
      filteredlength,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// Get restaurant details
export const getRestaurantDetails = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.status(200).json({
      success: true,
      restaurant,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error,
    });
  }
};

// Get top restaurants
export const getTopRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ ratings: -1 }).limit(4);
    res.status(200).json({
      success: true,
      restaurants,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error,
    });
  }
};
