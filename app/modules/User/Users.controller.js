import User from "./Users.model.js";

// Get all users
export async function getAllUsers(req, res) {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get users by branch
export async function getUserByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const result = await User.find({ branch });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get user by ID
export async function getUserById(req, res) {
  const id = req.params.id;
  try {
    const result = await User.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new user with hashed password
export async function createUser(req, res) {
  try {
    const userData = req.body;
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const result = await User.create(userData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Login user
export async function loginUser(req, res) {
  const { email, password } = req.body;
  console.log(email);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if user is inactive
    if (user.status === "inactive") {
      return res.status(403).json({ message: "Account is inactive. Please contact support." });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a user by ID
export async function removeUser(req, res) {
  const id = req.params.id;
  try {
    const result = await User.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a user by ID
export async function updateUser(req, res) {
  const id = req.params.id;
  const userData = req.body;
  try {
    const result = await User.findByIdAndUpdate(id, userData, { new: true });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
