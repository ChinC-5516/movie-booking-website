import express from "express";
import {
  deleteBooking,
  getBookingById,
  booking,
} from "../controllers/booking-controller.js";

const bookingsRouter = express.Router();

bookingsRouter.get("/:id", getBookingById);
bookingsRouter.post("/", booking);
bookingsRouter.delete("/:id", deleteBooking);
export default bookingsRouter;
