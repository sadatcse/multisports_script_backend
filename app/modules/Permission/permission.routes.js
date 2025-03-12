import { Router } from "express";
import {
  createRole,
  getPermissionsByRole,
  updatePermissions,
} from "./permission.controller.js";
import { authenticateToken } from "../../../middleware/authMiddleware.js"; 
const permissionRoutes = Router();

permissionRoutes.get("/:role", getPermissionsByRole);

permissionRoutes.put("/", updatePermissions);

permissionRoutes.post("/", createRole);

export default permissionRoutes;
