import Category from "./Categories.model.js";

// Create a new category
export async function createCategory(req, res) {
  try {
    const categoryData = req.body;
    const existingCategory = await Category.findOne({ name: categoryData.name });

    if (existingCategory) {
      return res.status(400).json({ message: "Category name already exists" });
    }

    const result = await Category.create(categoryData);
    res.status(201).json({ message: "Category created successfully", data: result });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get all categories with pagination and search
export async function getAllCategories(req, res) {
  try {
    // Parse query parameters for pagination and search
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    // Build the search query
    const query = {};
    if (search) {
      // Case-insensitive regex search on the 'name' field
      query.name = { $regex: search, $options: "i" };
    }

    // Get the total number of items that match the query
    const totalItems = await Category.countDocuments(query);
    const totalPages = Math.ceil(totalItems / limit);

    // Fetch the paginated and sorted data
    const categories = await Category.find(query)
      .sort({ serial: 1 }) // Sort by serial number
      .skip((page - 1) * limit)
      .limit(limit);

    // Send the response with data and pagination info
    res.status(200).json({
      data: categories,
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


// Update a category by ID
export async function updateCategory(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const result = await Category.findByIdAndUpdate(id, { name }, { new: true });
    if (result) {
      res.status(200).json({ message: "Category updated successfully", data: result });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a category by ID
export async function removeCategory(req, res) {
  const { id } = req.params;
  try {
    const result = await Category.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Category deleted successfully" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
