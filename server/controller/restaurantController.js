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

    console.log(req.user.name);

    const restaurant = await Restaurant.create({
      name: restaurantName,
      description: restaurantDescription,
      averageOrderValue: averageOrderValue,
      category: category,
      capacity: seatCapacity,
      user: req.user._id,
      ratings: rating,
      logo: logo,
      username: req.user.name,
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

// Get Restaurant Details - Restaurant Owner
export const restaurantDetails = async (req, res) => {
  const id = req.user._id;

  try {
    const details = await Restaurant.find({ user: id });
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Restaurant profile - Restaurant Owner
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

// Create User Review
export const createReview = async (req, res) => {
  const id = req.params.id;
  const { ratings, comments } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(ratings),
    comment: comments,
    // img: images,
  };
  const restaurant = await Restaurant.findById(id);

  restaurant.reviews.push(review);

  await restaurant.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    restaurant,
  });
};

// Update Restaurant review
export const updateReview = async (req, res) => {
  const id = req.params.id;

  const { rating, comment, reviewID } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const restaurant = await Restaurant.findById(id);
  restaurant.reviews.forEach((rev) => {
    if (rev.user.toString() === req.user._id.toString()) {
      if (rev._id.toString() === reviewID) {
        (rev.rating = rating), (rev.comment = comment);
      }
    }
  });

  await restaurant.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    review,
  });
};

// Delete Single Restaurant Review
export const deleteReview = async (req, res) => {
  const id = req.query.RestaurantID;

  const { reviewID } = req.body;

  const restaurant = await Restaurant.findById(id);

  const reviews = restaurant.reviews.filter(
    (rev) => rev._id.toString() !== reviewID
  );

  // console.log(reviews);

  await Restaurant.findByIdAndUpdate(
    id,
    {
      reviews,
    },
    {
      new: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
};

// Get reviews of a specific user
export const showMyReviews = async (req, res) => {
  const id = req.params.id;

  const restaurant = await Restaurant.findById(id);
  let newReview = [];

  restaurant.reviews.forEach((rev) => {
    if (rev.user.toString() === req.user._id.toString()) {
      console.log(rev);
      newReview.push(rev);
    }
  });
  res.status(200).json({
    success: true,
    newReview,
  });
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
