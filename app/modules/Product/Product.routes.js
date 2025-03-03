import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductsByCategory,
  getProductById,
  removeProduct,
  getProductsByCategoryAndBranch,
  updateProduct,
  getProductsByBranch,
} from "./Product.controller.js";

const ProductRoutes = Router();

// Get all products
ProductRoutes.get("/", getAllProducts);

// Get products by category
ProductRoutes.get("/:category/get-all", getProductsByCategory);

// Get products by branch
ProductRoutes.get("/branch/:branch/get-all", getProductsByBranch);

ProductRoutes.get("/branch/:branch/category/:category/get-all", getProductsByCategoryAndBranch);
// Get product by ID
ProductRoutes.get("/get-id/:id", getProductById);

// Create a new product
ProductRoutes.post("/post", createProduct);

// Delete a product by ID
ProductRoutes.delete("/delete/:id", removeProduct);

// Update a product by ID
ProductRoutes.put("/update/:id", updateProduct);

export default ProductRoutes;
