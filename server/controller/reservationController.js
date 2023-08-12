import { Reservation } from "../models/reservationModel.js";
import { Restaurant } from "../models/restaurantModel.js";
import { sendEmail } from "../utils/sendEmail.js";

let chart = [];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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

    console.log(reservation);
    restaurant.numOfReservations += 1;
    await restaurant.save({ validateBeforeSave: false });

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

// // Get total reservation of each month - Restaurant Owner
// export const monthlyReservations = async (req, res) => {
//   const restaurantName = await Restaurant.find({ user: req.user._id }).select(
//     "name"
//   );
//   //{ $match : { author : "dave" } }
//   // console.log(restaurantName[0].name);
//   const group = await Reservation.aggregate([
//     {
//       $match: { restaurantName: restaurantName[0].name },
//     },
//     {
//       $group: {
//         _id: {
//           year: { $year: "$createdAt" },
//           month: { $month: "$createdAt" },
//         },
//         total: { $sum: 1 },
//       },
//     },
//     {
//       $sort: {
//         "_id.year": 1,
//         "_id.month": 1,
//       },
//     },
//   ]);

//   res.status(200).json({
//     success: true,
//     group,
//   });
// };

// Get latest reservations - Restaurant Owner
export const latestReservations = async (req, res) => {
  try {
    const restaurantId = await Restaurant.find({ user: req.user._id }).select(
      "_id"
    );

    const reservations = await Reservation.find({
      restaurant: restaurantId[0]._id,
    })
      .populate("user", "name")
      .sort({ createdAt: -1 })
      .limit(3);

    res.status(200).json({
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

// Get all reservations of a restaurant - Restaurant Owner
export const getReservations = async (req, res) => {
  const restaurant = await Restaurant.find({ user: req.user._id }).select(
    "name"
  );

  const resName = restaurant[0].name; // The Bear

  const reservations = await Reservation.find({ restaurantName: resName })
    .sort({ createdAt: -1 })
    .populate("user", "name");

  res.status(200).json({
    success: true,
    reservations,
  });
};

// Update Reservation status - Restaurant Owner
export const updateReservationStatus = async (req, res) => {
  const { resStatus } = req.body;
  let msg;

  const reservation = await Reservation.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { status: resStatus } },
    { new: true, runValidators: true }
  ).populate("user", "email");

  if (resStatus === "Approved") {
    msg = `Your reservation at ${reservation.restaurantName} is Approved. \n\n Please arrive at the restaurant 15mins early.`;
  } else {
    msg = `Your reservation at ${reservation.restaurantName} is Rejected. \n\n Please try again after a few days.`;
  }

  await sendEmail({
    email: reservation.user.email,
    subject: `Reservation Status - ${reservation.restaurantName}`,
    msg,
  });

  res.status(202).json({
    success: true,
    reservation,
    message: "Email sent",
  });
};
