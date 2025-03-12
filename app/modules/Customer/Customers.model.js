import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CustomerSchema = Schema(
  {
    customerNumber: {
      type: String,
      unique: true,
      required: true,
      default: "01",
    },
    name: {
      type: String,
      required: [true, "Please provide the customer name"],
    },
    address: {
      type: String,
      required: false,
    },
    mobile: {
      type: String,
      required: [true, "Please provide the customer mobile number"],
    },
    email: {
      type: String,
      required: false,
    },

    dateOfBirth: {
      type: Date,
      required: false,
    },
    anniversary: {
      type: Date,
      required: false,
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

// Pre-save hook to generate the customer number
CustomerSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastCustomer = await mongoose.model("Purchaser").findOne().sort({ customerNumber: -1 });
    const lastNumber = lastCustomer ? parseInt(lastCustomer.customerNumber) : 0;
    const newNumber = (lastNumber + 1).toString().padStart(2, "0"); // Ensure it's always two digits
    this.customerNumber = newNumber;
  }
  next();
});

const Customer = model("Purchaser", CustomerSchema);

export default Customer;
