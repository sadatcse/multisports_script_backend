import { Router } from "express";
import {
  createAddon,
  getAllAddons,
  getAddonById,
  updateAddon,
  removeAddon,
  getAddonsByBranch,
} from "./Addonss.controller.js";

const AddonsRoutes = Router();

// Get all addons
AddonsRoutes.get("/", getAllAddons);

// Get addons by branch
AddonsRoutes.get("/:branch/get-all", getAddonsByBranch);

// Get addon by ID
AddonsRoutes.get("/get-id/:id", getAddonById);

// Create a new addon
AddonsRoutes.post("/post", createAddon);

// Update an addon by ID
AddonsRoutes.put("/update/:id", updateAddon);

// Delete an addon by ID
AddonsRoutes.delete("/delete/:id", removeAddon);

export default AddonsRoutes;
