import { Restaurant } from "../models/Restaurant";

export const createRestaurant = async (req, res) => {
    try {
        const {resName, description, aov, logo, category, seats} = req.body;

        const newRes = await Restaurant.create({
            resName,
            description,
            aov,
            logo,
            category,
            seats,
        });

        res.status(200).json("New Restaurant created!", newRes)
    } catch (error) {
        res.staus(500).json(error);
    }
    
}