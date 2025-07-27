import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a category name"],
      unique: true,
      trim: true,
    },
    serial: {
      type: Number,
      unique: true,
    },
  },
  { timestamps: true }
);

// Middleware to auto-generate serial number before saving
CategorySchema.pre("save", async function (next) {
  if (this.isNew) {
    // Find the highest serial number in the collection
    const highestSerial = await this.constructor
      .findOne({})
      .sort({ serial: -1 });

    // Set the serial number to 1 more than the highest, or 1 if it's the first document
    this.serial = (highestSerial && highestSerial.serial + 1) || 1;
  }
  next();
});

const Category = model("Category", CategorySchema);

export default Category;