import express from "express";
import environment from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import ip from "ip"; // Import ip package
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import routes from "./routes/routes.js";

environment.config();
const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware for security
app.use(helmet());

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Middleware for CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File upload middleware with error handling
app.use(
  fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max file size
    abortOnLimit: true,
    responseOnLimit: "File size exceeds the limit!",
  })
);

// Serve static files from the "public" directory
app.use(express.static("public"));

// API Routes
app.use("/api", routes);

// Root route
app.get("/", (req, res) => {
  const ipAddress = ip.address();
  res.status(200).json({
    message: `Server is Working. IP address: ${ipAddress}`,
  });
});

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  const ipAddress = ip.address();
  console.log(`Server started on port ${port} at ${new Date()}.`);
  console.log(`Server IP address: ${ipAddress}`);
});
