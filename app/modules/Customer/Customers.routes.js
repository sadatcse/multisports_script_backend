import { Router } from "express";
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  removeCustomer,
  getCustomerByMobile,
  getCustomersByBranch,
} from "./Customers.controller.js";
import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const CustomerRoutes = Router();

// Protect all routes with authentication middleware
CustomerRoutes.get("/", authenticateToken, getAllCustomers);
CustomerRoutes.get("/get-id/:id", authenticateToken, getCustomerById);
CustomerRoutes.post("/post", authenticateToken, createCustomer);
CustomerRoutes.put("/update/:id", authenticateToken, updateCustomer);
CustomerRoutes.delete("/delete/:id", authenticateToken, removeCustomer);
CustomerRoutes.get("/branch/:branch", authenticateToken, getCustomersByBranch);
CustomerRoutes.get("/branch/:branch/search", authenticateToken, getCustomerByMobile);

export default CustomerRoutes;
