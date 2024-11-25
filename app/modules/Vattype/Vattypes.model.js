import mongoose from "mongoose";
const { Schema, model } = mongoose;

const VATTypeSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the VAT type name"],
    },
    number: {
      type: String,
      required: [true, "Please provide the VAT number"],
    },
    issue: {
      type: Date,
      required: [true, "Please provide the issue date"],
    },
    expireDate: {
      type: Date,
      required: [true, "Please provide the expiry date"],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const VATType = model("VATType", VATTypeSchema);

export default VATType;
