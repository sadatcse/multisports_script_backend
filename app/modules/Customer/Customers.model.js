
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CustomerSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the customer name"],
    },
    address: {
      type: String,
    },
    mobile: {
      type: String,
      required: [true, "Please provide the customer mobile number"],
    },
    email: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    anniversary: {
      type: Date,
    },
    dateOfFirstVisit: {
      type: Date,
      default: Date.now,
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const Customer = model("Customer", CustomerSchema);

export default Customer;