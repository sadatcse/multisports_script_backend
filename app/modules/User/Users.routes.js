import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserByBranch,
  getUserById,
  removeUser,
  updateUser,
} from "./Users.controller.js";

const UserRoutes = Router();

// Get all users
UserRoutes.get("/", getAllUsers);

// Get users by branch
UserRoutes.get("/:branch/get-all", getUserByBranch);

// Get user by ID
UserRoutes.get("/get-id/:id", getUserById);

// Create a new user
UserRoutes.post("/post", createUser);

// Delete a user by ID
UserRoutes.delete("/delete/:id", removeUser);

// Update a user by ID
UserRoutes.put("/update/:id", updateUser);

export default UserRoutes;
