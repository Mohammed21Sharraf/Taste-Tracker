import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: true,
      message: "Please Login to access this route",
    });
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData._id);
 
  next();
};
