import Product from "./Products.model.js";

// Create a new product
export async function createProduct(req, res) {
  try {
    const productData = req.body;
    const existingProduct = await Product.findOne({ productCode: productData.productCode });
    
    if (existingProduct) {
        return res.status(400).json({ message: "Product code already exists" });
    }

    const result = await Product.create(productData);
    res.status(201).json({ message: "Product created successfully", data: result });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get all products and populate category information
export async function getAllProducts(req, res) {
  try {
    // Destructure query parameters with default values for pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    // --- Search Logic ---
    // Create a query object. If a search term is provided, it will be used to filter results.
    let searchQuery = {};
    if (search) {
      searchQuery = {
        $or: [
          { productName: { $regex: search, $options: "i" } }, // Case-insensitive search on product name
          { productCode: { $regex: search, $options: "i" } }, // Case-insensitive search on product code
          { productDescription: { $regex: search, $options: "i" } }, // Case-insensitive search on description
        ],
      };
    }

    // --- Pagination Logic ---
    // Count the total number of documents that match the search query
    const totalItems = await Product.countDocuments(searchQuery);
    
    // Calculate the total number of pages
    const totalPages = Math.ceil(totalItems / limit);
    
    // Calculate the number of documents to skip
    const skip = (page - 1) * limit;

    // --- Database Query ---
    // Find the products matching the search query with pagination
    const products = await Product.find(searchQuery)
      .populate("productCategory", "name serial -_id") // Populate category details
      .sort({ createdAt: -1 }) // Sort by newest first
      .skip(skip)
      .limit(limit);

    // --- Response ---
    // Send the final response with data and pagination info
    res.status(200).json({
      data: products,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        itemsPerPage: limit,
      },
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get a single product by ID
export async function getProductById(req, res) {
    const { id } = req.params;
    try {
        const result = await Product.findById(id).populate("productCategory");
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

// Update a product by ID
export async function updateProduct(req, res) {
  const { id } = req.params;
  const productData = req.body;
  try {
    const result = await Product.findByIdAndUpdate(id, productData, { new: true });
    if (result) {
      res.status(200).json({ message: "Product updated successfully", data: result });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a product by ID
export async function removeProduct(req, res) {
  const { id } = req.params;
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

export async function searchByCode(req, res) {
  try {
    const { code } = req.query;

    // Check if the product code is provided in the query
    if (!code) {
      return res.status(400).json({ message: "Product code is required." });
    }

    // First, attempt to find the exact product by its code
    const product = await Product.findOne({ productCode: code }).populate("productCategory");

    // If the product is found, return its data
    if (product) {
      return res.status(200).json({ 
        message: "Product found successfully.", 
        data: product 
      });
    }

    // If no product is found, find related products for suggestion
    // We use a regular expression for a partial, case-insensitive match
    const suggestions = await Product.find({
      productCode: { $regex: code, $options: "i" },
    })
    .limit(3) // Limit the number of suggestions to 3
    .select("productName productCode -_id"); // Select only the name and code for the suggestion

    // Return a 404 response with the suggestions
    res.status(404).json({
      message: "Product not found. Did you mean one of these?",
      suggestions: suggestions,
    });

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}