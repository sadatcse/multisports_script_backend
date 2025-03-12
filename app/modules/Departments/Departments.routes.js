import { Router } from "express";
import {
  createDepartment,
  getAllDepartment,
  getAllDepartments,
  getByIdDepartment,
  removeDepartment,
  updateDepartment,
} from "./Departments.controller.js";
import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const DepartmentsRoutes = Router();

// Protect all routes with authentication middleware
DepartmentsRoutes.get("/", authenticateToken, getAllDepartments);
DepartmentsRoutes.get("/:branch/get-all", authenticateToken, getAllDepartment);
DepartmentsRoutes.get("/get-id/:id", authenticateToken, getByIdDepartment);
DepartmentsRoutes.post("/post", authenticateToken, createDepartment);
DepartmentsRoutes.delete("/delete/:id", authenticateToken, removeDepartment);
DepartmentsRoutes.put("/update/:id", authenticateToken, updateDepartment);

export default DepartmentsRoutes;
