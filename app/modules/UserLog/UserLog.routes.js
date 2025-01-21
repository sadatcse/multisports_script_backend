import { Router } from "express";
import {
  createUserLog,
  getAllUserLogs,
  getUserLogById,
  updateUserLog,
  removeUserLog,
  getPaginatedUserLogs,
  getUserLogsByBranch,
} from "./UserLog.controller.js";

const UserLogRoutes = Router();

// Get all user logs
UserLogRoutes.get("/", getAllUserLogs);

// Get user logs by branch
UserLogRoutes.get("/:branch/get-all", getUserLogsByBranch);

// Get user log by ID
UserLogRoutes.get("/get-id/:id", getUserLogById);

// Delete a user log by ID
UserLogRoutes.delete("/delete/:id", removeUserLog);

UserLogRoutes.get("/paginated", getPaginatedUserLogs);

export default UserLogRoutes;
