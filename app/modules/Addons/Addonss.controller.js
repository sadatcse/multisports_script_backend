import Addon from "./Addonss.model.js";

// Get all addons
export async function getAllAddons(req, res) {
  try {
    const result = await Addon.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get addons by branch
export async function getAddonsByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const result = await Addon.find({ branch });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get addon by ID
export async function getAddonById(req, res) {
  const id = req.params.id;
  try {
    const result = await Addon.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Addon not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new addon
export async function createAddon(req, res) {
  try {
    const addonData = req.body;
    const result = await Addon.create(addonData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update an addon by ID
export async function updateAddon(req, res) {
  const id = req.params.id;
  const addonData = req.body;
  try {
    const result = await Addon.findByIdAndUpdate(id, addonData, { new: true });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Addon not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove an addon by ID
export async function removeAddon(req, res) {
  const id = req.params.id;
  try {
    const result = await Addon.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Addon deleted successfully" });
    } else {
      res.status(404).json({ message: "Addon not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
