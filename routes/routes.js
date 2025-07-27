import { Router } from "express";

import userRoutes from "../app/modules/User/Users.routes.js";
import CategoryRoutes from "../app/modules/Category/Categories.routes.js";
import ProductRoutes from "../app/modules/Product/Products.routes.js";
import { getImageUrl } from "../config/space.js";
import TransactionLogRoutes from "../app/modules/TransactionLog/TransactionLog.routes.js";
import transactionLogger from "../middleware/transactionLogger.js";


const routes = Router();

// This middleware will log all transactions
routes.use(transactionLogger);

// Define API endpoints for different modules
routes.use("/user", userRoutes);
routes.use("/categories", CategoryRoutes);
routes.use("/products", ProductRoutes);

// Endpoint for getting image URLs from a cloud space
routes.post("/get-image-url", getImageUrl);

// Endpoint for transaction logs
routes.use("/transaction-logs", TransactionLogRoutes);

export default routes;
