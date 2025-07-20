import { Router } from "express";
import {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  removeReservation,
  getReservationsByBranch,
} from "./TableReservation.controller.js";
import { authenticateToken } from "../../../middleware/authMiddleware.js";

const TableReservationRoutes = Router();

// Protect all routes with authentication middleware
TableReservationRoutes.post("/post", authenticateToken, createReservation);
TableReservationRoutes.get("/", getAllReservations);
TableReservationRoutes.get("/branch/:branch", authenticateToken, getReservationsByBranch);
TableReservationRoutes.get("/get-id/:id", authenticateToken, getReservationById);
TableReservationRoutes.put("/update/:id", authenticateToken, updateReservation);
TableReservationRoutes.delete("/delete/:id", authenticateToken, removeReservation);

export default TableReservationRoutes;
