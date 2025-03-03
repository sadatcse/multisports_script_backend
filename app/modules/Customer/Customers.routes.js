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

const CustomerRoutes = Router();

// Get all customers
CustomerRoutes.get("/", getAllCustomers);

// Get customer by ID
CustomerRoutes.get("/get-id/:id", getCustomerById);

// Create a new customer
CustomerRoutes.post("/post", createCustomer);

// Update a customer by ID
CustomerRoutes.put("/update/:id", updateCustomer);

// Delete a customer by ID
CustomerRoutes.delete("/delete/:id", removeCustomer);

CustomerRoutes.get("/branch/:branch", getCustomersByBranch);

CustomerRoutes.get("/branch/:branch/search", getCustomerByMobile);


export default CustomerRoutes;