import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import routes from "./routes/routes.js";
import path from "path";
import { fileURLToPath } from "url";
import ip from "ip"; // Dynamically fetch server IP
import createImageUploadRoute from './config/uploadImage/imageupload.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Security middleware
app.use(helmet({
  hidePoweredBy: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests
});
app.use(limiter);

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173', 'http://localhost:3000'];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/api", routes);
app.use('/api/image', createImageUploadRoute(process.env.IMAGE_UPLOAD_DIR || 'uploads/images'));
app.use('/api/profile', createImageUploadRoute(process.env.PROFILE_UPLOAD_DIR || 'uploads/profile'));

// Root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running." });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Server started on port ${port} at ${new Date()}`);
  console.log(`Server accessible at: http://${ip.address()}:${port}`);
});
