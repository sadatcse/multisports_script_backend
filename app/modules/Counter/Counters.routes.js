import { Router } from "express";
import {
  createCounter,
  getAllCounters,
  getCounterById,
  getCountersByBranch,
  updateCounter,
  removeCounter,
} from "./Counters.controller.js";
import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const CounterRoutes = Router();

// Protect all routes with authentication middleware
CounterRoutes.get("/", authenticateToken, getAllCounters);
CounterRoutes.get("/:branch/get-all", authenticateToken, getCountersByBranch);
CounterRoutes.get("/get-id/:id", authenticateToken, getCounterById);
CounterRoutes.post("/post", authenticateToken, createCounter);
CounterRoutes.put("/update/:id", authenticateToken, updateCounter);
CounterRoutes.delete("/delete/:id", authenticateToken, removeCounter);

export default CounterRoutes;
