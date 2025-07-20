import mongoose from "mongoose";
const { Schema, model } = mongoose;

const TableReservationSchema = new Schema(
  {
    table: {
      type: Schema.Types.ObjectId,
      ref: "Table",
      required: [true, "Please provide the table ID"],
    },
    startTime: {
      type: Date,
      required: [true, "Please provide the reservation start time"],
    },
    endTime: {
      type: Date,
      required: [true, "Please provide the reservation end time"],
    },
    customerName: {
      type: String,
      required: [true, "Please provide the customer's name"],
      trim: true,
    },
    customerPhone: {
      type: String,
      required: [true, "Please provide the customer's phone number"],
      trim: true,
    },
    customerEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },
    additionalInfo: {
      type: String,
      trim: true,
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch for the reservation"],
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
      default: "Pending",
    },
    bookedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: [true, "Please specify the user who booked the reservation"]
    }
  },
  { timestamps: true }
);

// Index to prevent double booking the same table at the same time
TableReservationSchema.index({ table: 1, startTime: 1, endTime: 1 }, { unique: true });


const TableReservation = model("TableReservation", TableReservationSchema);

export default TableReservation;
