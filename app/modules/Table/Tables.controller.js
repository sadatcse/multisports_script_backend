
import Table from "./Tables.model.js";

// Get all tables
export async function getAllTables(req, res) {
  try {
    const result = await Table.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get table by ID
export async function getTableById(req, res) {
  const id = req.params.id;
  try {
    const result = await Table.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Table not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export const getTablesByBranch = async (req, res) => {
  const { branch } = req.params;
  try {
    const tables = await Table.find({ branch });
    res.status(200).json(tables);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tables", error: err.message });
  }
};

// Create a new table
export async function createTable(req, res) {
  try {
    const tableData = req.body;
    const result = await Table.create(tableData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a table by ID
export async function updateTable(req, res) {
  const id = req.params.id;
  const tableData = req.body;
  try {
    const result = await Table.findByIdAndUpdate(id, tableData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Table not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a table by ID
export async function removeTable(req, res) {
  const id = req.params.id;
  try {
    const result = await Table.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Table deleted successfully" });
    } else {
      res.status(404).json({ message: "Table not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}