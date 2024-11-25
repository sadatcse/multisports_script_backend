import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryByBranch,
  getCategoryById,
  removeCategory,
  updateCategory,
} from "./Catagories.controller.js";

const CategoryRoutes = Router();

// Get all categories
CategoryRoutes.get("/", getAllCategories);

// Get categories by branch
CategoryRoutes.get("/:branch/get-all", getCategoryByBranch);

// Get category by ID
CategoryRoutes.get("/get-id/:id", getCategoryById);

// Create a new category
CategoryRoutes.post("/post", createCategory);

// Delete a category by ID
CategoryRoutes.delete("/delete/:id", removeCategory);

// Update a category by ID
CategoryRoutes.put("/update/:id", updateCategory);

export default CategoryRoutes;
