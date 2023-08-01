import { Reservation } from "../models/reservationModel.js";
import { Restaurant } from "../models/restaurantModel.js";

// Create Reservation for a user
export const createReservation = async (req, res) => {
  try {
    const { seatCapacity, time, date } = req.body;

    const reservation = await Reservation.create({
      user: req.user._id,
      restaurant: req.params.id,
      seatCapacity,
      time,
      date,
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

// async function updateSeatCapacity(id, seats) {
//     const restaurant = await Restaurant.findById(req.param.id);
//     restaurant.seatCapacity -= seats;
//     await restaurant.save({validateBeforeSave: false});
// }

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
