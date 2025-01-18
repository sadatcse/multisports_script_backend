import mongoose from "mongoose";
import User from "./app/modules/User/Users.model.js"; // Adjust the path as needed
import bcrypt from "bcrypt";
import fs from "fs/promises";

// MongoDB connection
const DB_URI = "mongodb+srv://sadatcse:WBe8UTZXFpEgajkp@bill.5f5rm.mongodb.net/Teaxo?retryWrites=true&w=majority&appName=Bill"; // Replace with your MongoDB URI

async function importUsers() {
  try {
    // Connect to the database
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");

    // Read the JSON file
    const data = await fs.readFile("users.json", "utf8");
    const users = JSON.parse(data);

    // Hash passwords and prepare user objects
    const usersWithHashedPasswords = await Promise.all(
      users.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        return user;
      })
    );

    // Insert users into the database
    await User.insertMany(usersWithHashedPasswords);
    console.log("Users imported successfully");

    // Close the database connection
    mongoose.connection.close();
  } catch (err) {
    console.error("Error importing users:", err.message);
    mongoose.connection.close();
  }
}

// Run the import function
importUsers();
