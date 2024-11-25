import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    photo: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    role: {
      type: String,
      enum: ["admin", "user", "manager"], // Adjust roles as per your needs
      default: "user",
    },
    counter: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    branch: {
      type: String,
      required: [true, "Please provide a branch"],
    },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

export default User;
