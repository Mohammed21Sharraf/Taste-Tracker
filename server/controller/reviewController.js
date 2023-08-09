import { User } from "../models/userModel.js";
import { Review } from "../models/reviewModel.js";
import { Restaurant } from "../models/restaurantModel.js";

// Create Review of a user 
export const createReview = async (req, res) => {
    try {

        const { ratings, comments } = req.body;
        const user = await User.findById(req.user._id.toString());
        const userName = user.name;

        const restaurant = await Restaurant.findById(req.params.id);

        const review = await Review.create({
            user: req.user._id,
            restaurant: req.params.id,
            userName: userName,
            rating: Number(ratings),
            comment: comments,
        })

        restaurant.points += Number(ratings);
        restaurant.numOfReviews += 1;
        restaurant.ratings = restaurant.points / restaurant.numOfReviews

        await review.save({ validateBeforeSave: false });
        await restaurant.save({ validateBeforeSave: false });

        res.status(200).json({
            success: true,
            review
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error
        })
    }
}

// Delete Review of a specific user 
export const deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (review){
            const restaurantID = review.restaurant.toString();
            const restaurant = await Restaurant.findById(restaurantID);
    
            restaurant.points -= review.rating;
            restaurant.numOfReviews -= 1;
            restaurant.ratings = restaurant.points / restaurant.numOfReviews
            console.log(restaurant);
    
            await restaurant.save({ validateBeforeSave: false });
    
            await review.save({ validateBeforeSave: false });
    
            await review.deleteOne();
    
            res.status(200).json({
                success: true,
                message: "Review deleted",
            });
        }
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error
        })
    }
}

// update a review 
export const updateReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        const restaurant = await Restaurant.findById(review.restaurant.toString());
        if (req.user._id.toString() === review.user.toString()) {
            const { rating, comment } = req.body;

            const newPoints = rating - review.rating;
            restaurant.points += newPoints
            restaurant.ratings = restaurant.points / restaurant.numOfReviews

            review.rating = rating;
            review.comment = comment;

        }
        
        await review.save({ validateBeforeSave: false });
        await restaurant.save({ validateBeforeSave: false });
        res.status(202).json({
            success: true,
            review,
        });

    } catch (error) {
        res.status(404).json({
            success:false,
            message: error
        })
    }
}

// get reviews of particular restaurant restaurant
export const getReview = async(req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        const review = await Review.find({restaurant: req.params.id});
        res.status(200).json({
            success: true,
            review
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error
        })
    }
}