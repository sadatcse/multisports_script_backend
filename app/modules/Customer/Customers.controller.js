
import Customer from "./Customers.model.js";

// Get all customers
export async function getAllCustomers(req, res) {
  try {
    const result = await Customer.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Search customer by mobile
export async function getCustomerByMobile(req, res) {
  const { branch } = req.params;
  const { mobile } = req.query;
  try {
    const customer = await Customer.find({ branch, mobile });
    console.log(customer);
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}


// Get customer by ID
export async function getCustomerById(req, res) {
  const id = req.params.id;
  try {
    const result = await Customer.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export const getCustomersByBranch = async (req, res) => {
  const { branch } = req.params;
  const { pageNumber = 1, itemsPerPage = 10 } = req.query;

  const page = parseInt(pageNumber, 10);
  const limit = parseInt(itemsPerPage, 10);
  const skip = (page - 1) * limit;

  try {
    const data = await Customer.find({ branch })
      .skip(skip)
      .limit(limit);
    
    const totalData = await Customer.countDocuments({ branch });
    
    res.status(200).json({
      data,
      totalData,
      totalPages: Math.ceil(totalData / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch customers", error: err.message });
  }
};

// Create a new customer
export async function createCustomer(req, res) {
  try {
    const { email, mobile } = req.body;

    // Check if a customer with the same email already exists
    const emailExists = await Customer.findOne({ email });
    if (emailExists) {
      return res.status(401).json({ error: "Email is already taken" });
    }

    // Check if a customer with the same mobile already exists
    const mobileExists = await Customer.findOne({ mobile });
    if (mobileExists) {
      return res.status(402).json({ error: "Mobile number is already taken" });
    }

    // If no duplicates, proceed to create the customer
    const customerData = req.body;
    const result = await Customer.create(customerData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a customer by ID
export async function updateCustomer(req, res) {
  const id = req.params.id;
  const customerData = req.body;
  try {
    const result = await Customer.findByIdAndUpdate(id, customerData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a customer by ID
export async function removeCustomer(req, res) {
  const id = req.params.id;
  try {
    const result = await Customer.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Customer deleted successfully" });
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
