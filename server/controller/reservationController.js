import { Reservation } from "../models/reservationModel.js";
import { Restaurant } from "../models/restaurantModel.js";

// Create Reservation for a user
export const createReservation = async (req, res) => {
  try {
    const { seatCapacity, time, date } = req.body;

    const newDate = new Date(date);
    const day = newDate.toLocaleString("default", { day: "2-digit" });
    const month = newDate.toLocaleString("default", { month: "long" });
    const year = newDate.toLocaleString("default", { year: "numeric" });

    const restaurant = await Restaurant.findById(req.params.id);
    const restaurantName = restaurant.name;

    const reservation = await Reservation.create({
      user: req.user._id,
      restaurant: req.params.id,
      restaurantName,
      seatCapacity,
      time,
      date: day + " " + month + " " + year,
    });

    res.status(202).json({
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

// View Reservation of a specific user
export const myReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user._id });

    res.status(202).json({
      success: true,
      reservations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// Delete Reservation of a specific user
export const deleteMyReservation = async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (!reservation) {
    return res.status(500).json({
      success: false,
      message: "Reservation not found",
    });
  }

  await reservation.deleteOne();

  res.status(200).json({
    success: true,
    message: "Reservation deleted",
  });
};

// Get total reservation of each month
export const monthlyReservations = async (req, res) => {
  const group = await Reservation.aggregate([
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        total: { $sum: 1 },
      },
    },
    {
      $sort: {
        "_id.year": 1,
        "_id.month": 1,
      },
    },
  ]);

  res.status(200).json({
    success: true,
    group,
  });
};
