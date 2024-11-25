import VATType from "./Vattypes.model.js";

// Get all VAT types
export async function getAllVATTypes(req, res) {
  try {
    const result = await VATType.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get VAT types by branch
export async function getVATTypesByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const result = await VATType.find({ branch });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get VAT type by ID
export async function getVATTypeById(req, res) {
  const id = req.params.id;
  try {
    const result = await VATType.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "VAT type not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new VAT type
export async function createVATType(req, res) {
  try {
    const vatTypeData = req.body;
    const result = await VATType.create(vatTypeData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a VAT type by ID
export async function updateVATType(req, res) {
  const id = req.params.id;
  const vatTypeData = req.body;
  try {
    const result = await VATType.findByIdAndUpdate(id, vatTypeData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "VAT type not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a VAT type by ID
export async function removeVATType(req, res) {
  const id = req.params.id;
  try {
    const result = await VATType.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "VAT type deleted successfully" });
    } else {
      res.status(404).json({ message: "VAT type not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
