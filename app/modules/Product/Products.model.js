import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    productCode: {
      type: String,
      required: [true, "Please provide a product code"],
      unique: true,
      trim: true,
    },
    productName: {
      type: String,
      required: [true, "Please provide a product name"],
      trim: true,
    },
    productCategory: {
       type: String,
      trim: true,
    },
    productDescription: {
      type: String,
      trim: true,
    },
    additionalInformation: {
      type: String,
      trim: true,
    },
    productPhoto: {
      type: String,
    },
    productPrice: {
      type: Number,
      required: [true, "Please provide a product price"],
      min: [0, "Product price must be a positive number"],
    },
  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);

export default Product;
