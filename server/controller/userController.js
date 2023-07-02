import { User } from "../models/userModel.js";
import { sendToken } from "../utils/sendToken.js";

// Register User
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log(name, email, password, role);
    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    console.log(user);
    sendToken(res, user, "Registered User Successfully", 201);
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// Login User
export const login = async (req, res) => {
  const { loginEmail, loginPassword } = req.body;

  if (!loginEmail || !loginPassword) {
    res.status(400).json({
      success: false,
      message: "Please Enter email or password",
    });
  }

  const user = await User.findOne({ email: loginEmail }).select("+password");

  if (!user) {
    res.status(500).json({
      success: false,
      message: "User doesnot exist",
    });
  }

  const isMatch = await user.comparePassword(loginPassword);

  if (!isMatch) {
    res.status(500).json({
      success: false,
      message: "Incorrect Email or Password",
    });
  }

  sendToken(res, user, `Welcome back ${user.name}`, 201);
};

// Logout User
export const logout = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};

// Get User Details
export const getUserDetails = async (req, res) => {
  const user = await User.findById(req.user.id).select("+password");

  res.status(200).json({
    success: true,
    user,
  });
};
