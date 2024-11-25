import { Router } from "express";
import {
  createCounter,
  getAllCounters,
  getCounterById,
  getCountersByBranch,
  updateCounter,
  removeCounter,
} from "./Counters.controller.js";

const CounterRoutes = Router();

// Get all counters
CounterRoutes.get("/", getAllCounters);

// Get counters by branch
CounterRoutes.get("/:branch/get-all", getCountersByBranch);

// Get counter by ID
CounterRoutes.get("/get-id/:id", getCounterById);

// Create a new counter
CounterRoutes.post("/post", createCounter);

// Update a counter by ID
CounterRoutes.put("/update/:id", updateCounter);

// Delete a counter by ID
CounterRoutes.delete("/delete/:id", removeCounter);

export default CounterRoutes;
