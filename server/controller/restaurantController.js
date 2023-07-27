import { Restaurant } from "../models/restaurantModel.js";

// Create a new Restaurant -- Restaurant Owner
export const createRestaurant = async (req, res) => {
  try {
    const {
      restaurantName,
      restaurantDescription,
      averageOrderValue,
      category,
      seatCapacity,
    } = req.body;

    console.log(req.user.name);

    const restaurant = await Restaurant.create({
      name: restaurantName,
      description: restaurantDescription,
      averageOrderValue: averageOrderValue,
      category: category,
      capacity: seatCapacity,
      user: req.user._id,
      username: req.user.name
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
  const id = req.params.id; 

  try {
    const reviews = await Restaurant.findById(id);
    res.status(200).json(reviews.reviews);
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

// Create User Review 

export const createReview = async (req, res) => {
  const id = req.params.id;
  const {ratings, comments, images} = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: ratings, 
    comment: comments,
    img: images,
  };
  const restaurant = await Restaurant.findById(id);

  restaurant.reviews.push(review);

  await restaurant.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    restaurant,
  });

}

// Update Restaurant review 


