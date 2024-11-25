import { Router } from "express";
import {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  getInvoicesByBranch,
  removeInvoice,
  updateInvoice,
} from "./Invoices.controller.js";

const InvoiceRoutes = Router();

// Get all invoices
InvoiceRoutes.get("/", getAllInvoices);

// Get invoices by branch
InvoiceRoutes.get("/:branch/get-all", getInvoicesByBranch);

// Get invoice by ID
InvoiceRoutes.get("/get-id/:id", getInvoiceById);

// Create a new invoice
InvoiceRoutes.post("/post", createInvoice);

// Delete an invoice by ID
InvoiceRoutes.delete("/delete/:id", removeInvoice);

// Update an invoice by ID
InvoiceRoutes.put("/update/:id", updateInvoice);

export default InvoiceRoutes;
