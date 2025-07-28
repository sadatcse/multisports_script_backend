import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './app/modules/User/Users.model.js'; // Adjust the path to your User model
import connectDB from './config/db.js'; // Adjust the path to your DB connection function

dotenv.config();

const resetPassword = async () => {
  try {
    // --- 1. Define the user to update and the new password ---
    const userEmailToUpdate = ''; // The email of the user whose password you want to reset
    const newPassword = ''; // The new password you want to set

    // --- 2. Connect to the database ---
    await connectDB();
    console.log('✅ Database connected.');

    // --- 3. Find the user by email ---
    const user = await User.findOne({ email: userEmailToUpdate });

    if (!user) {
      console.log(`❌ User with email "${userEmailToUpdate}" not found.`);
      await mongoose.disconnect();
      process.exit(1);
    }

    console.log(`- Found user: ${user.name} (${user.email})`);

    // --- 4. Set the new password and save the user ---
    // The .pre('save') hook in your User model will automatically hash this password.
    user.password = newPassword;
    await user.save();

    console.log(`✅ Password for ${user.email} has been reset successfully.`);

    // --- 5. Disconnect from the database ---
    await mongoose.disconnect();
    console.log('- Database disconnected.');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error resetting password:', error.message);
    await mongoose.disconnect();
    process.exit(1);
  }
};

resetPassword();