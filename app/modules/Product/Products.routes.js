import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  removeProduct,
} from "./Products.controller.js";
import { authenticateToken } from "../../../middleware/authMiddleware.js"; // Assuming same middleware path

const ProductRoutes = Router();

// Public routes
// This route now supports search and pagination via query parameters
// e.g., /?search=myproduct&page=2&limit=5
ProductRoutes.get("/", getAllProducts);
ProductRoutes.get("/get-id/:id", getProductById);

// Protected routes (require authentication)
ProductRoutes.post("/post", authenticateToken, createProduct);
ProductRoutes.put("/update/:id", authenticateToken, updateProduct);
ProductRoutes.delete("/delete/:id", authenticateToken, removeProduct);

export default ProductRoutes;