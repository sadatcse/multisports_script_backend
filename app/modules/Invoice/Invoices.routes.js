import { Router } from "express";
import {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  getInvoicesByBranch,
  removeInvoice,
  updateInvoice,
  getDashboardByBranch,
  getItemByBranch,
  getPendingByBranch,
  getInvoicesByDateRange,
  getdatesByBranch,
  getSalesByDateRange,
} from "./Invoices.controller.js";

const InvoiceRoutes = Router();

// Get all invoices
InvoiceRoutes.get("/", getAllInvoices);

InvoiceRoutes.get("/:branch/dashboard", getDashboardByBranch);

InvoiceRoutes.get("/:branch/item", getItemByBranch);
// Get invoices by branch
InvoiceRoutes.get("/:branch/get-all", getInvoicesByBranch);

InvoiceRoutes.get("/:branch/date/:date", getdatesByBranch);

InvoiceRoutes.get("/:branch/status/:status", getPendingByBranch);
// Get invoice by ID
InvoiceRoutes.get("/get-id/:id", getInvoiceById);

// Create a new invoice
InvoiceRoutes.post("/post", createInvoice);

// Delete an invoice by ID
InvoiceRoutes.delete("/delete/:id", removeInvoice);

// Update an invoice by ID
InvoiceRoutes.put("/update/:id", updateInvoice);

InvoiceRoutes.get("/:branch/date-range", getInvoicesByDateRange);

InvoiceRoutes.get("/:branch/sales", getSalesByDateRange);
export default InvoiceRoutes;
