import { Router } from "express";
import {
  createTable,
  getAllTables,
  getTableById,
  updateTable,
  removeTable,
  getTablesByBranch,
} from "./Tables.controller.js";

const TableRoutes = Router();

// Get all tables
TableRoutes.get("/", getAllTables);

// Get table by ID
TableRoutes.get("/get-id/:id", getTableById);

// Create a new table
TableRoutes.post("/post", createTable);

// Update a table by ID
TableRoutes.put("/update/:id", updateTable);

// Delete a table by ID
TableRoutes.delete("/delete/:id", removeTable);

TableRoutes.get("/branch/:branch", getTablesByBranch);

export default TableRoutes;