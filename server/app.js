import express from "express";
import { config } from "dotenv";
import user from "./routes/userRoutes.js";
import restaurant from "./routes/restaurantRoutes.js";
import reservation from "./routes/reservationRoutes.js";
import wishlist from "./routes/wishlistRoutes.js";
import review from "./routes/reviewRoutes.js"
import cookieParser from "cookie-parser";
import cors from "cors";

config({
  path: "./config/config.env",
});

const corsOptions = {
  AccessControlAllowOrigin: "http://localhost:3000",
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1", user);
app.use("/api/v1", restaurant);
app.use("/api/v1", reservation);
app.use("/api/v1", wishlist);
app.use("/api/v1", review);

export default app;
