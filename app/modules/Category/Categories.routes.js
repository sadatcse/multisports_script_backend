import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  removeCategory,
} from "./Categories.controller.js";
import { authenticateToken } from "../../../middleware/authMiddleware.js"; // Assuming same middleware path

const CategoryRoutes = Router();

// Public route
CategoryRoutes.get("/", getAllCategories);

// Protected routes (require authentication)
CategoryRoutes.post("/post", authenticateToken, createCategory);
CategoryRoutes.put("/update/:id", authenticateToken, updateCategory);
CategoryRoutes.delete("/delete/:id", authenticateToken, removeCategory);

export default CategoryRoutes;