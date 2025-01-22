import mongoose from "mongoose";
import Product from "./app/modules/Product/Product.model.js"; // Adjust the path as needed

const products1 = [
  { productName: "Delivery Charge", price: 100 },
  { productName: "Special Platter Set Menu", price: 250 },
  { productName: "Spicy Chicken Curry", price: 100 },
  { productName: "Crispy Wonton", price: 25 },
  { productName: "Ramadan Ifter Platter", price: 70 },
  { productName: "Mixed Vegetables", price: 50 },
  { productName: "Button Mushrooms", price: 50 },
  { productName: "Medium Extra Cheese", price: 80 },
  { productName: "Regular Extra Cheese", price: 50 },
  { productName: "Extra Sausage", price: 40 },
  { productName: "Extra Beef Topping (Pizza)", price: 100 },
  { productName: "Extra Chicken Topping", price: 70 },
  { productName: "Mozzarella Cheese", price: 30 },
  { productName: "Soft Bun", price: 30 },
  { productName: "Mayonnaise (মেওনিস)", price: 10 },
  { productName: "Spicy Naga Sauce (নাগা)", price: 10 },
  { productName: "Extra Steamed Rice", price: 60 },
  { productName: "Stir-fried Vegetables", price: 20 },
  { productName: "Extra Basmati Rice", price: 60 },
  { productName: "Grated Parmesan Cheese", price: 25 },
  { productName: "Classic Mayo Dip", price: 20 },
  { productName: "Tangy Naga Sauce", price: 10 },
];


const products2 = [
  { productName: "Mogoj Vuna", price: 180 },
  { productName: "Butter Nan", price: 50 },
  { productName: "Beef Seekh Kabab", price: 220 },
  { productName: "Chicken Seekh Kabab", price: 170 },
  { productName: "Chicken Tandoori Kabab", price: 180 },
  { productName: "Chicken Hariyali Kabab", price: 200 },
  { productName: "Chicken Reshmi Kabab", price: 220 },
  { productName: "Mogoj Fry", price: 180 },
  { productName: "Beef Boti Kabab", price: 170 },
  { productName: "Beef Chaap", price: 170 },
  { productName: "Chicken Boti Kabab", price: 150 },
  { productName: "Chicken Chaap", price: 150 },
  { productName: "Luchi", price: 5 },
];


const products3 = [
  { productName: "Extra Beef", price: 100 },
  { productName: "Extra Chicken", price: 70 },
  { productName: "Extra Sausage", price: 40 },
  { productName: "Extra Cheese (S)", price: 50 },
  { productName: "Beef Keema (S)", price: 399 },
  { productName: "Four Seasons Pizza (S)", price: 399 },
  { productName: "BBQ Chicken Pizza (S)", price: 299 },
  { productName: "Chicken Keema (S)", price: 249 },
  { productName: "Pizza Margherita (S)", price: 199 },
];


const products4 = [
  { productName: "Extra Beef", price: 100 },
  { productName: "Extra Chicken", price: 70 },
  { productName: "Extra Sausage", price: 40 },
  { productName: "Extra Cheese (M)", price: 80 },
  { productName: "TEAXO Special Pizza (M)", price: 400 },
  { productName: "Beef Keema (M)", price: 599 },
  { productName: "Pepperoni Pizza (M)", price: 499 },
  { productName: "Four Seasons Pizza (M)", price: 599 },
  { productName: "BBQ Chicken Pizza (M)", price: 470 },
  { productName: "Chicken Keema (M)", price: 449 },
  { productName: "Pizza Margherita (M)", price: 299 },
];


const products5 = [
  { productName: '16 Takar 12" Pizza Offer', price: 16 },
  { productName: "Extra Beef (L)", price: 100 },
  { productName: "Extra Chicken", price: 70 },
  { productName: "Extra Sausage", price: 40 },
  { productName: "Extra Cheese (L)", price: 100 },
  { productName: "TEAXO Special Pizza (L)", price: 600 },
  { productName: "Beef Keema (L)", price: 699 },
  { productName: "Pepperoni Pizza (L)", price: 599 },
  { productName: "Four Seasons Pizza (L)", price: 699 },
  { productName: "BBQ Chicken Pizza (L)", price: 599 },
  { productName: "Chicken Keema (L)", price: 599 },
  { productName: "Pizza Margherita (L)", price: 399 },
];

const products6 = [
  { productName: "Mojo", price: 25 },
  { productName: "Water", price: 20 },
  { productName: "7UP", price: 25 },
  { productName: "Coke", price: 25 },
];

const products7 = [
  { productName: "White Sauce Pasta", price: 180 },
  { productName: "Mexican Pasta (without oven)", price: 200 },
  { productName: "Alfredo Pasta", price: 350 },
  { productName: "White Sauce Oven Baked Pasta", price: 320 },
  { productName: "Naga Oven Baked Pasta", price: 270 },
  { productName: "Hot Chicken Oven Baked Pasta", price: 250 },
  { productName: "BBQ Oven Baked Pasta", price: 240 },
  { productName: "Chicken Oven Baked Pasta", price: 230 },
];


const products8 = [
  { productName: "Lime Chicken", price: 260 },
  { productName: "Chicken Steak", price: 270 },
  { productName: "Steak Platter", price: 290 },
];

const products9 = [
  { productName: "Prawn Mixed Chow Mein", price: 200 },
  { productName: "Chicken Chow Mein", price: 150 },
  { productName: "Special Mixed Chow Mein", price: 170 },
  { productName: "Korean Stir-Fried Noodles", price: 220 },
];

const products10 = [
  { productName: "Rice Menu", price: 200 },
  { productName: "Teaxo Special Fried Rice (2:1)", price: 360 },
  { productName: "Mexican Rice Bowl", price: 140 },
  { productName: "BBQ Rice Bowl", price: 160 },
  { productName: "Set Menu - 4", price: 260 },
  { productName: "Set Menu - 3", price: 250 },
  { productName: "Set Menu - 2", price: 190 },
  { productName: "Set Menu - 1", price: 200 },
];


const products11 = [
  { productName: "Extra Patty Beef", price: 100 },
  { productName: "Extra Patty Chicken", price: 70 },
  { productName: "Extra Sausage", price: 40 },
  { productName: "Extra Cheese", price: 40 },
  { productName: "Grill Sub", price: 150 },
  { productName: "Teaxo Special Burger", price: 470 },
  { productName: "Beef Double Patty Burger", price: 360 },
  { productName: "Beef Patty Burger", price: 230 },
  { productName: "Beef Cheese Burger", price: 200 },
  { productName: "Regular Chicken Cheese Burger", price: 180 },
  { productName: "Chicken Double Patty Burger", price: 290 },
  { productName: "Naga Burger", price: 180 },
  { productName: "BBQ Chicken Burger", price: 190 },
  { productName: "Chicken Mushroom Patty Burger", price: 170 },
  { productName: "Chicken Sausage Patty Burger", price: 180 },
  { productName: "Chicken Patty Burger", price: 160 },
];


const products12 = [
  { productName: "Teaxo Special Meatbox", price: 199 },
  { productName: "Smokey Sandwich", price: 140 },
  { productName: "Club Sandwich (4 PCS)", price: 170 },
  { productName: "Chicken Sandwich", price: 150 },
];



const products13 = [
  { productName: "Combo - 2", price: 580 },
  { productName: "Combo - 1", price: 300 },
  { productName: "BBQ Lollipop (6 PCS)", price: 210 },
  { productName: "BBQ Wings (6 PCS)", price: 200 },
  { productName: "Fried Chicken", price: 120 },
  { productName: "Korean Naga Wings (6 PCS)", price: 220 },
  { productName: "Chicken Fried Wings (8 PCS)", price: 240 },
];


const products14 = [
  { productName: "Pav Bhaji", price: 99 },
  { productName: "Special Nachos", price: 150 },
  { productName: "Doi Fuchka", price: 120 },
  { productName: "Crispy Wedges", price: 120 },
  { productName: "Cashew Nut Salad", price: 200 },
  { productName: "Garlic Mushroom", price: 150 },
];


const products15 = [
  { productName: "Fried Chicken Momo", price: 200 },
  { productName: "Naga Chicken Momo", price: 180 },
  { productName: "Regular Chicken Momo", price: 170 },
  { productName: "Corn Soup", price: 120 },
  { productName: "Chicken Vegetable Soup", price: 160 },
  { productName: "Thai Clear Soup", price: 150 },
  { productName: "Thai Soup", price: 150 },
];


const products16 = [
  { productName: "Chocolate Cold Coffee 250ml", price: 140 },
  { productName: "Chocolate Cold Coffee 350ml", price: 190 },
  { productName: "Cold Coffee 350ml", price: 170 },
  { productName: "Cold Coffee 250ml", price: 130 },
  { productName: "Black Coffee", price: 80 },
  { productName: "Hot Chocolate Coffee", price: 150 },
  { productName: "Hot Coffee", price: 120 },
];


const products17 = [
  { productName: "KitKat Milk Shake 350ml", price: 200 },
  { productName: "KitKat Milk Shake 250ml", price: 170 },
  { productName: "Oreo Milk Shake 350ml", price: 190 },
  { productName: "Oreo Milk Shake 250ml", price: 160 },
  { productName: "Strawberry Milk Shake 350ml", price: 180 },
  { productName: "Strawberry Milk Shake 250ml", price: 150 },
  { productName: "Vanilla Milk Shake 350ml", price: 180 },
  { productName: "Vanilla Milk Shake 250ml", price: 150 },
  { productName: "Chocolate Milkshake 350ml", price: 180 },
  { productName: "Chocolate Milkshake 250ml", price: 150 },
];


const products18 = [
  { productName: "Pathao 1", price: 1000 },
{ productName: "Pathao 2", price: 500 },
{ productName: "Pathao 3", price: 100 },
{ productName: "Pathao 4", price: 50 },
{ productName: "Pathao 5", price: 10 },
{ productName: "Pathao 6", price: 5 },
{ productName: "Pathao 7", price: 1 },
];


const products19 = [
  { productName: "Blue Lagoon (350ml)", price: 210 },
  { productName: "Blue Lagoon (250ml)", price: 170 },
  { productName: "Green Mango (350ml)", price: 170 },
  { productName: "Green Mango (250ml)", price: 130 },
  { productName: "Mango (350ml)", price: 180 },
  { productName: "Mango (250ml)", price: 140 },
  { productName: "Watermelon (350ml)", price: 160 },
  { productName: "Watermelon (250ml)", price: 120 },
  { productName: "Lemon Mint (350ml)", price: 170 },
  { productName: "Lemon Mint (250ml)", price: 130 },
  { productName: "Lemonade (350ml)", price: 160 },
  { productName: "Lemonade (250ml)", price: 120 },
  { productName: "Pineapple (350ml)", price: 160 },
  { productName: "Pineapple (250ml)", price: 120 },
  { productName: "Papaya Juice (350ml)", price: 160 },
  { productName: "Papaya Juice (250ml)", price: 120 },
  { productName: "Orange (350ml)", price: 190 },
  { productName: "Orange (250ml)", price: 150 },
  { productName: "Virgin Mojito (350ml)", price: 200 },
  { productName: "Virgin Mojito (250ml)", price: 160 },
];


const products20 = [
  { productName: "Vanilla Lacchi (350ml)", price: 190 },
  { productName: "Vanilla Lacchi (250ml)", price: 150 },
  { productName: "Sour Lacchi (350ml)", price: 170 },
  { productName: "Sour Lacchi (250ml)", price: 130 },
  { productName: "Sweet Lacchi (350ml)", price: 180 },
  { productName: "Sweet Lacchi (250ml)", price: 140 },
  { productName: "Salt Lacchi (350ml)", price: 160 },
  { productName: "Salt Lacchi (250ml)", price: 120 },
];


const products21 = [
  { productName: "Chicken Tandoori Special Platter", price: 300 },
  { productName: "Crispy Rice Bowl", price: 170 },
  { productName: "Beef Sizzling", price: 380 },
  { productName: "Chicken Sizzling Platter", price: 300 },
  { productName: "Chicken Suslick Platter", price: 230 },
  { productName: "Chicken Tandoori Platter", price: 290 },
];


const products22 = [
  { productName: "Foodi 8", price: 1000 },
  { productName: "Foodi 7", price: 500 },
  { productName: "Foodi 6", price: 5 },
  { productName: "Foodi 4", price: 10 },
  { productName: "Foodi 3", price: 20 },
  { productName: "Foodi 2", price: 50 },
  { productName: "Foodi 1", price: 100 },
];


const products23 = [
  { productName: "খিচুড়ি", price: 250 },
];


const products24 = [
  { productName: "Special Kebab Platter", price: 300 },
  { productName: "Set Menu Iftar Platter", price: 300 },
  { productName: "Chicken Steak Platter", price: 450 },
  { productName: "Chicken Kebab Platter", price: 370 },
  { productName: "Korma Roast Platter", price: 399 },
  { productName: "Chicken Tandoori Platter", price: 410 },
  { productName: "Chicken Onion Platter", price: 370 },
  { productName: "Ramadan Special Platter", price: 380 },
];


const cat1 = "Add Food";
const cat2 = "কাবাব";
const cat3 = "PIZZA (Small)";
const cat4 = "PIZZA (Medium)";
const cat5 = "PIZZA (Large)";
const cat6 = "পানি & কোক";
const cat7 = "পাস্তা";
const cat8 = "STEAK PLATTER";
const cat9 = "চওমিন";
const cat10 = "RICE MENU";
const cat11 = "বার্গার & সাব";
const cat12 = "SANDWICHES";
const cat13 = "ফ্রাইড চিকেন & উইংস";
const cat14 = "স্ন্যাকস";
const cat15 = "SOUP & MOMO";
const cat16 = "কফি";
const cat17 = "শেক";
const cat18 = "PATHAO";
const cat19 = "জুস";
const cat20 = "লাচ্ছি";
const cat21 = "New platter";
const cat22 = "Foodi";
const cat23 = "খিচুড়ি";
const cat24 = "রামাদান প্ল্যাটার";


const allProducts = [
  { products: products1, category: cat1 },
  { products: products2, category: cat2 },
  { products: products3, category: cat3 },
  { products: products4, category: cat4 },
  { products: products5, category: cat5 },
  { products: products6, category: cat6 },
  { products: products7, category: cat7 },
  { products: products8, category: cat8 },
  { products: products9, category: cat9 },
  { products: products10, category: cat10 },
  { products: products11, category: cat11 },
  { products: products12, category: cat12 },
  { products: products13, category: cat13 },
  { products: products14, category: cat14 },
  { products: products15, category: cat15 },
  { products: products16, category: cat16 },
  { products: products17, category: cat17 },
  { products: products18, category: cat18 },
  { products: products19, category: cat19 },
  { products: products20, category: cat20 },
  { products: products21, category: cat21 },
  { products: products22, category: cat22 },
  { products: products23, category: cat23 },
  { products: products24, category: cat24 },
];

const fakeData = allProducts.flatMap((productSet) =>
  productSet.products.map((product) => ({
    category: productSet.category,
    productName: product.productName,
    price: product.price,
    branch: "teaxo",
    status: "available",
  }))
);

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