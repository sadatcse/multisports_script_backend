import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CategorySchema = Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Please provide a category name"],
    },
    serial: {
      type: Number,
      required: [true, "Please provide a serial number"],
      unique: true,
    },
    branch: {
      type: String,
      required: [true, "Please provide a branch"],
    },
  },
  { timestamps: true }
);

const Category = model("Category", CategorySchema);

export default Category;
