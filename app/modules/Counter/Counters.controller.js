import Counter from "./Counters.model.js";

// Get all counters
export async function getAllCounters(req, res) {
  try {
    const result = await Counter.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get counters by branch
export async function getCountersByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const result = await Counter.find({ branch });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get counter by ID
export async function getCounterById(req, res) {
  const id = req.params.id;
  try {
    const result = await Counter.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Counter not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new counter
export async function createCounter(req, res) {
  try {
    const counterData = req.body;
    const result = await Counter.create(counterData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a counter by ID
export async function updateCounter(req, res) {
  const id = req.params.id;
  const counterData = req.body;
  try {
    const result = await Counter.findByIdAndUpdate(id, counterData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Counter not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a counter by ID
export async function removeCounter(req, res) {
  const id = req.params.id;
  try {
    const result = await Counter.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Counter deleted successfully" });
    } else {
      res.status(404).json({ message: "Counter not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
