import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Function to generate invoice serial number
const generateInvoiceSerial = () => {
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2);
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const date = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${year}${month}${date}${hours}${minutes}${seconds}`;
};

// Product schema
const ProductSchema = Schema({
  productName: { type: String, required: true },
  qty: { type: Number, required: true },
  rate: { type: Number, required: true },
  subtotal: { type: Number, required: true },
});

// Invoice schema
const InvoiceSchema = Schema(
  {
    invoiceSerial: {
      type: String,
      required: [true, "Please provide an invoice serial"],
      unique: true,
      default: generateInvoiceSerial, // Automatically generate serial
    },
    dateTime: {
      type: Date,
      required: [true, "Please provide the date and time"],
      default: Date.now, // Default to current date and time
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
    vat: {
      type: Number,
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
    orderStatus: {
      type: String,
      enum: ["pending", "completed", "cancelled", "cooking", "served"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Invoice = model("Invoice", InvoiceSchema);

export default Invoice;
