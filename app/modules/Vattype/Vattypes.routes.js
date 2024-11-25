import { Router } from "express";
import {
  createVATType,
  getAllVATTypes,
  getVATTypeById,
  getVATTypesByBranch,
  updateVATType,
  removeVATType,
} from "./Vattypes.controller.js";

const VATTypeRoutes = Router();

// Get all VAT types
VATTypeRoutes.get("/", getAllVATTypes);

// Get VAT types by branch
VATTypeRoutes.get("/:branch/get-all", getVATTypesByBranch);

// Get VAT type by ID
VATTypeRoutes.get("/get-id/:id", getVATTypeById);

// Create a new VAT type
VATTypeRoutes.post("/post", createVATType);

// Update a VAT type by ID
VATTypeRoutes.put("/update/:id", updateVATType);

// Delete a VAT type by ID
VATTypeRoutes.delete("/delete/:id", removeVATType);

export default VATTypeRoutes;
