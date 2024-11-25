import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ProductSchema = Schema({
  productName: { type: String, required: true },
  qty: { type: Number, required: true },
  rate: { type: Number, required: true },
  subtotal: { type: Number, required: true },
});

const InvoiceSchema = Schema(
  {
    invoiceSerial: {
      type: String,
      required: [true, "Please provide an invoice serial"],
      unique: true,
    },
    dateTime: {
      type: Date,
      required: [true, "Please provide the date and time"],
    },
    loginUserEmail: {
      type: String,
      required: [true, "Please provide the email of the logged-in user"],
    },
    loginUserName: {
      type: String,
      required: [true, "Please provide the name of the logged-in user"],
    },
    products: {
      type: [ProductSchema],
      required: true,
    },
    totalQty: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    orderType: {
      type: String,
      enum: ["dine-in", "takeaway", "delivery"],
      required: true,
    },
    counter: {
      type: String,
      required: [true, "Please provide a counter"],
    },
    branch: {
      type: String,
      required: [true, "Please provide a branch"],
    },
    totalSale: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Invoice = model("Invoice", InvoiceSchema);

export default Invoice;
