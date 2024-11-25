import { Router } from "express";
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  removeCompany,
} from "./Companys.controller.js";

const CompanyRoutes = Router();

// Get all companies
CompanyRoutes.get("/", getAllCompanies);

// Get company by ID
CompanyRoutes.get("/get-id/:id", getCompanyById);

// Create a new company
CompanyRoutes.post("/post", createCompany);

// Update a company by ID
CompanyRoutes.put("/update/:id", updateCompany);

// Delete a company by ID
CompanyRoutes.delete("/delete/:id", removeCompany);

export default CompanyRoutes;
