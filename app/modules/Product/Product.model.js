import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ProductSchema = Schema(
  {
    category: {
      type: String,
      required: [true, "Please provide a category"],
    },
    productName: {
      type: String,
      required: [true, "Please provide a product name"],
    },
    flavour: {
      type: String,
    },
    cFlavor: {
      type: String,
    },
    addOns: {
      type: [String], // Array of add-ons
    },
    vat: {
      type: Number,
      default: 0, // VAT percentage
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
    },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    productDetails: {
      type: String,
    },
    branch: {
      type: String,
      required: [true, "Please provide a branch"],
    },
    photo: {
      type: String, // URL or file path for the photo
    },
  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);

export default Product;
