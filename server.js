import express from "express";
import environment from "dotenv";
import cors from "cors";

import fileUpload from "express-fileupload";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import routes from "./routes/routes.js";
import path from "path";
import passport from "passport";



environment.config();


const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Security middleware
app.use(helmet({
  hidePoweredBy: true,
}));

app.use(passport.initialize());


// Rate limiting
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 1000, // Limit each IP to 100 requests
});
app.use(limiter);

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
  'http://localhost:5173', 
  'http://localhost:3000', 
  'http://localhost:3001', 

];
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
app.use(
  fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max file size
  })
);
// Static files
app.use(express.static("public"));
// Routes
app.use("/api", routes);

// Root route
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running." });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {

  console.log(`Server started at ${new Date()}`);

});