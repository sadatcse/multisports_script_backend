import Invoice from "./Invoices.model.js";

// Get all invoices
export async function getAllInvoices(req, res) {
  try {
    const result = await Invoice.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get invoices by branch
export async function getInvoicesByBranch(req, res) {
  const branch = req.params.branch;
  try {
    const result = await Invoice.find({ branch });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get invoice by ID
export async function getInvoiceById(req, res) {
  const id = req.params.id;
  try {
    const result = await Invoice.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Invoice not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Create a new invoice
export async function createInvoice(req, res) {
  try {
    const invoiceData = req.body;
    const result = await Invoice.create(invoiceData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove an invoice by ID
export async function removeInvoice(req, res) {
  const id = req.params.id;
  try {
    const result = await Invoice.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Invoice deleted successfully" });
    } else {
      res.status(404).json({ message: "Invoice not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update an invoice by ID
export async function updateInvoice(req, res) {
  const id = req.params.id;
  const invoiceData = req.body;
  try {
    const result = await Invoice.findByIdAndUpdate(id, invoiceData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Invoice not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
