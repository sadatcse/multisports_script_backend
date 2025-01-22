import mongoose from "mongoose";
import Product from "./app/modules/Product/Product.model.js"; // Adjust the path as needed

const products = [
  { productName: "White Sauce Pasta", price: 180 },
  { productName: "Mexican Pasta (without oven)", price: 200 },
  { productName: "Alfredo Pasta", price: 350 },
  { productName: "White Sauce Oven Baked Pasta", price: 320 },
  { productName: "Naga Oven Baked Pasta", price: 270 },
  { productName: "Hot Chicken Oven Baked Pasta", price: 250 },
  { productName: "BBQ Oven Baked Pasta", price: 240 },
  { productName: "Chicken Oven Baked Pasta", price: 230 },
];




const fakeData = products.map((product) => ({
  category: "পাস্তা",
  productName: product.productName,
  price: product.price,
  branch: "teaxo",
  status: "available",
}));

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sadatcse:WBe8UTZXFpEgajkp@bill.5f5rm.mongodb.net/Teaxo?retryWrites=true&w=majority&appName=Bill",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Connected to the database");


    const insertedData = await Product.insertMany(fakeData);
    console.log("Inserted fake data:", insertedData);

    mongoose.disconnect();
    console.log("Disconnected from the database");
  } catch (error) {
    console.error("Error generating fake data:", error);
  }
})();
