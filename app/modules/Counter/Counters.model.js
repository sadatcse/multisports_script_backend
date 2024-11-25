import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CounterSchema = Schema(
  {
    counterName: {
      type: String,
      required: [true, "Please provide the counter name"],
    },
    counterSerial: {
      type: Number,
      required: [true, "Please provide the counter serial"],
      unique: true,
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const Counter = model("Counter", CounterSchema);

export default Counter;
