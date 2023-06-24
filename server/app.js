import express from "express";
import { config } from "dotenv";
import user from "./routes/userRoutes.js";
import restaurant from "./routes/restaurantRoutes.js";
import cookieParser from "cookie-parser";

config({
  path: "./config/config.env",
});

const app = express();

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1", user);
app.use("/api/v1", restaurant);

export default app;
