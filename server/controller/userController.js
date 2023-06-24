import { User } from "../models/User.js";
import { sendToken } from "../utils/sendToken.js";

// Register User
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role,
      avatar: {
        public_id: "tempurl",
        url: "tempurl",
      },
    });

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
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "Please Enter email or password",
    });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.status(500).json({
      success: false,
      message: "User doesnot exist",
    });
  }

  const isMatch = await user.comparePassword(password);

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
