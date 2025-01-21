import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserByBranch,
  getUserById,
  removeUser,
  updateUser,
  loginUser,
  logoutUser,
} from "./Users.controller.js";


export function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access token missing" });

  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

const UserRoutes = Router();

// Get all users
UserRoutes.get("/", getAllUsers);

// Get users by branch
UserRoutes.get("/:branch/get-all", getUserByBranch);

// Get user by ID
UserRoutes.get("/get-id/:id", getUserById);

// Create a new user
UserRoutes.post("/post", createUser);

// Login user
UserRoutes.post("/login", loginUser);

UserRoutes.post("/logout", logoutUser);

// Delete a user by ID
UserRoutes.delete("/delete/:id", removeUser);

// Update a user by ID
UserRoutes.put("/update/:id", updateUser);

export default UserRoutes;
