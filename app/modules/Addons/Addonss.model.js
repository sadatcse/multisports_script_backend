import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AddonSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the addon name"],
    },
    price: {
      type: Number,
      required: [true, "Please provide the addon price"],
    },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const Addon = model("Addon", AddonSchema);

export default Addon;
