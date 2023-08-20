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
      offer,
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
    res.status(200).json({ details });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Restaurant profile - Restaurant Owner
export const restaurantUpdate = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const updatedDetails = req.body;

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      updatedDetails,
      { new: true }
    );

    res.status(200).json(updatedRestaurant);
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

// post complain
export const createComplain = async (req, res) => {
  try {
    const id = req.params.id;
    const { complain } = req.body;
    const comp = {
      user: req.user._id,
      name: req.user.name,
      complains: complain,
    };
    console.log(comp)
    const restaurant = await Restaurant.findById(id);

    restaurant.complaints.push(comp);
    restaurant.ratings -= 3;

    await restaurant.save({ validateBeforeSave: false });
    console.log(restaurant)
    res.status(200).json({
      success: true,
      restaurant,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      mesaage: error,
    });
  }
};

// view all complains
export const restaurantComplaints = async (req, res) => {
  const id = req.params.id;

  try {
    const restaurant = await Restaurant.findById(id);
    res.status(200).json(restaurant.complaints);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a complain
// export const deleteComplain = async (req, res) => {
//   try {
//     const id = req.params.id;

//     const {complainID}  = req.body;

//     const restaurant = await Restaurant.findById(id);

//     const complaints = restaurant.complaints.filter((comp) => comp._id.toString() !== complainID)
//     console.log(complaints);

//     await Restaurant.findByIdAndUpdate(
//       id,
//       {
//       complaints
//       },
//       {
//       new: true,
//       useFindAndModify: false
//     });
//     res.status(200).json({
//       success: true,
//       complaints
//     });

//   } catch (error) {
//     res.status(404).json({
//       success:false,
//       message: error
//     })
//   }

// }

// ranking system
export const getRanksOfRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ ratings: -1 }).limit(10);
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

// get offer 
export const getOffers = async (req, res) => {
  try {
    const restaurant = await Restaurant.find({},{"name":1, "offer":1, "logo":1});
    const offerredRes = []
    const newRes = restaurant.filter((res) => {
      if (res.offer !== undefined) {
        offerredRes.push(res);
        return offerredRes;
      }
    });
    res.status(200).json({
      success: true,
      newRes
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error
    });
  }
}
