import Product from "./Product.model.js";

// Get all products
export async function getAllProducts(req, res) {
  try {
    const result = await Product.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get products by category
export async function getProductsByCategory(req, res) {
  const category = req.params.category;
  try {
    const result = await Product.find({ category });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get product by ID
export async function getProductById(req, res) {
  const id = req.params.id;
  try {
    const result = await Product.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new product
export async function createProduct(req, res) {
  try {
    const productData = req.body;
    const result = await Product.create(productData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a product by ID
export async function removeProduct(req, res) {
  const id = req.params.id;
  try {
    const result = await Product.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a product by ID
export async function updateProduct(req, res) {
  const id = req.params.id;
  const productData = req.body;
  try {
    const result = await Product.findByIdAndUpdate(id, productData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
