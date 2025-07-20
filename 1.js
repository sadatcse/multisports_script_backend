import mongoose from "mongoose";
import Product from "./app/modules/Product/Product.model.js"; // Adjust the path as needed

const products1 = [
  { productName: "Delivery Charge", price: 100 },
  { productName: "Delivery Charge", price: 50 },
  { productName: "Delivery Charge", price: 150 },
  { productName: "Extra Cheese", price: 80 },
  { productName: "Extra Sauces", price: 30 },
  { productName: "Extra Chicken", price: 50 },
  { productName: "Extra Chicken Patty", price: 120 },
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
  { productName: "Mojo", price: 25 },
  { productName: "Water", price: 20 },
  { productName: "7UP", price: 25 },
  { productName: "Coke", price: 25 },
];

const products4 = [
  { productName: "Pathao 1", price: 1000 },
  { productName: "Pathao 2", price: 500 },
  { productName: "Pathao 3", price: 100 },
  { productName: "Pathao 4", price: 50 },
  { productName: "Pathao 5", price: 10 },
  { productName: "Pathao 6", price: 5 },
  { productName: "Pathao 7", price: 1 },
];

const products5 = [
  { productName: "Foodi 8", price: 1000 },
  { productName: "Foodi 7", price: 500 },
  { productName: "Foodi 6", price: 5 },
  { productName: "Foodi 4", price: 10 },
  { productName: "Foodi 3", price: 20 },
  { productName: "Foodi 2", price: 50 },
  { productName: "Foodi 1", price: 100 },
];

const products6 = [{ productName: "খিচুড়ি", price: 250 }];

const products7 = [
  { productName: "French Fries", price: 150 },
  { productName: "Garlic Mushroom", price: 220 },
  { productName: "Chicken Cashew-Nut Salad", price: 280 },
  { productName: "Special nachos", price: 210 },
  { productName: "Momo (8 pcs)", price: 210 },
  { productName: "Potato Wedges", price: 195 },
];

const products8 = [
  { productName: "Thai Soup", price: 210 },
  { productName: "Thai Clear Soup", price: 190 },
  { productName: "Cream of Mushroom Soup", price: 290 },
  { productName: "Pure Vegetable Soup", price: 160 },
  { productName: "Corn Soup", price: 150 },
];

const products9 = [
  { productName: "Regular Chicken Cheese Burger", price: 270 },
  { productName: "Chicken Double Patty Burger", price: 380 },
  { productName: "Chicken Patty Burger", price: 230 },
  { productName: "BBQ Chicken Burger", price: 250 },
];

const products10 = [
  { productName: "Chicken Sandwich", price: 120 },
  { productName: "Club Sandwich (4 pieces)", price: 230 },
  { productName: "Smoky Sandwich", price: 130 },
  { productName: "Meatbox", price: 180 },
];

const products11 = [
  { productName: "Mexican Vegetable Pizza (Regular)", price: 330 },
  { productName: "Mexican Vegetable Pizza (Large)", price: 580 },
  { productName: "Margherita-Pizza (Regular)", price: 220 },
  { productName: "Margherita-Pizza (Large)", price: 360 },
  { productName: "Chicken Fajita Pizza (Regular)", price: 390 },
  { productName: "Chicken Fajita Pizza (Large)", price: 650 },
  { productName: "BBQ Chicken Pizza (Regular)", price: 450 },
  { productName: "BBQ Chicken Pizza (Large)", price: 690 },
];

const products12 = [
  { productName: "Alfredo Cheese Pasta", price: 280 },
  { productName: "Oven Baked Chicken Pasta", price: 260 },
  { productName: "Mexican Pasta with Cheese", price: 290 },
  { productName: "BBQ Pasta", price: 260 },
];

const products13 = [
  { productName: "Chicken Fried Wings (9 pieces)", price: 260 },
  { productName: "B.B.Q Lollipop (6 pieces)", price: 250 },
  { productName: "Korean Naga Wings (6 pieces)", price: 210 },
  { productName: "Crispy Fried (2 pieces)", price: 240 },
  { productName: "B.B.Q Wings (6 pieces)", price: 240 },
];



const products14 = [
  { productName: "Egg Fried Rice", price: 220 },
  { productName: "Chicken Vegetable", price: 190 },
  { productName: "Vegetable Fried Rice", price: 180 },
  { productName: "Thai Fried Chicken", price: 360 },
  { productName: "Mix Thai Fried Rice", price: 280 },
  { productName: "Chicken Sizzling", price: 350 },
  { productName: "Thai Vegetable", price: 220 },
  { productName: "Thai Prawn Masala", price: 420 },
];

const products15 = [
  { productName: "Chicken Chow Mein", price: 260 },
  { productName: "Prawn Mixed Chow Mein", price: 350 },
  { productName: "Special Mixed Chow Mein", price: 340 },
];



const products16 = [
  { productName: "Steak Platter with Lemon Butter Rice", price: 395 },
  { productName: "B.B.Q Chicken", price: 300 },
  { productName: "Thai Platter", price: 290 },
  { productName: "Chicken Chilli Onion", price: 340 },
  { productName: "Masala Thai Platter", price: 320 },
  { productName: "Chicken Tandoori Platter", price: 350 },
  { productName: "BBQ Steak Platter", price: 330 },
  { productName: "Lime Grilled Chicken", price: 340 },

];

const products18 = [
  { productName: "Combo 1 (1:2)", price: 999 },
  { productName: "Combo 2 (1:3)", price: 1400 },
];

const products17 = [
  { productName: "Set Menu 1", price: 230 },
  { productName: "Set Menu 2", price: 240 },
  { productName: "Set Menu 3", price: 280 },
  { productName: "Set Menu 4", price: 290 },
  { productName: "Set Menu 5", price: 250 },
  { productName: "Set Menu 6", price: 310 },
];

const products19 = [
  { productName: "Orange Juice", price: 210 },
  { productName: "Papaya Juice", price: 150 },
  { productName: "Pineapple Juice", price: 160 },
  { productName: "Lemon Mint Juice", price: 120 },
  { productName: "Watermelon Juice", price: 160 },
  { productName: "Seasonal Juice", price: 170 },
];

const products20 = [
  { productName: "Hot Coffee", price: 110 },
  { productName: "Hot Chocolate Coffee", price: 140 },
  { productName: "Black Coffee", price: 60 },
  { productName: "Cold Coffee (250ml)", price: 180 },
  { productName: "Chocolate Cold Coffee (250ml)", price: 210 },
];

const products21 = [
  { productName: "Chocolate Milk Shake", price: 190 },
  { productName: "Vanilla Milk Shake", price: 190 },
  { productName: "Strawberry Milk Shake", price: 200 },
  { productName: "Oreo Milk Shake", price: 230 },
  { productName: "KitKat Milk Chocolate", price: 250 },
];

const products22 = [
  { productName: "Salt Lassi", price: 90 },
  { productName: "Vanilla Lassi", price: 129 },
  { productName: "Sweet Lassi", price: 100 },
];

const products23 = [
 { productName: "Mexican Rice Bowl", price: 190 },
  { productName: "BBQ RICE BOWL 210", price: 190 },
   { productName: "CRISPY RICE BOWL 220", price: 190 },

];

const products24 = [
  { productName: "Set Menu 1", price: 380 },
  { productName: "Set Menu 2", price: 350 },
  { productName: "Set Menu 3", price: 430 },
  { productName: "Set Menu 4", price: 390 },
  { productName: "Set Menu 5", price: 300 },
  { productName: "Set Menu 6", price: 350 },
  { productName: "Set Menu 7", price: 380 },
  { productName: "Set Menu 8", price: 320 },
  { productName: "Set Menu 9", price: 400 },
];


 

const cat1 = "Add Food";
const cat2 = "কাবাব";
const cat3 = "পানি & কোক";
const cat4 = "PATHAO";
const cat5 = "Foodi";
const cat6 = "খিচুড়ি";
const cat7 = "Appitizer";
const cat8 = "Soup";
const cat9 = "Burger";
const cat10 = "Sandwich";
const cat11 = "Pizza";
const cat12 = "Pasta";
const cat13 = "Fried Chicken & Wings";
const cat14 = "Thai Menu";
const cat15 = "ChowMein";
const cat16 = "Chicken Platters";
const cat17 = "Set Menus-b";
const cat18 = "Combo Meals";
const cat19 = "Juices";
const cat20 = "Coffee";
const cat21 = "Milk Shakes";
const cat22 = "Lassi";
const cat23 = "Rice Bowl";
const cat24 = "Set Menus";

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