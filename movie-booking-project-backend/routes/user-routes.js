import express from "express";
import {
  deleteUser,
  getAllUsers,
  getBookingsOfUser,
  getUserById,
  login,
  partialUpdateUser,
  singup,
  updateUser,
} from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", singup);
userRouter.put("/:id", updateUser);
userRouter.patch("/:id", partialUpdateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id", getBookingsOfUser);

export default userRouter;