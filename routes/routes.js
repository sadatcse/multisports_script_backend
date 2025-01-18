import { Router } from "express";

import AddonsRoutes from "../app/modules/Addons/Addonss.routes.js";
import CategoryRoutes from "../app/modules/Catagorie/Catagories.routes.js";
import CompanyRoutes from "../app/modules/Company/Companys.routes.js";
import CounterRoutes from "../app/modules/Counter/Counters.routes.js";
import departmentsRoutes from "../app/modules/Departments/Departments.routes.js";
import InvoiceRoutes from "../app/modules/Invoice/Invoices.routes.js";
import permissionRoutes from "../app/modules/Permission/permission.routes.js";
import ProductRoutes from "../app/modules/Product/Product.routes.js";
import userRoutes from "../app/modules/User/Users.routes.js";
import VATTypeRoutes from "../app/modules/Vattype/Vattypes.routes.js";

import { sendTestEmail } from "../controllers/emailController.js";

const routes = Router();

routes.use("/addons", AddonsRoutes);
routes.use("/category", CategoryRoutes);
routes.use("/company", CompanyRoutes);
routes.use("/counter", CounterRoutes);
routes.use("/departments", departmentsRoutes);
routes.use("/invoice", InvoiceRoutes);
routes.use("/permissions", permissionRoutes);
routes.use("/product", ProductRoutes);
routes.use("/user", userRoutes);
routes.use("/vattype", VATTypeRoutes);

// Define the email sending route
routes.post("/send-email", sendTestEmail);

export default routes;
