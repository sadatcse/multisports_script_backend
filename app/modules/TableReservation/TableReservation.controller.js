import TableReservation from "./TableReservation.model.js";

// Create a new table reservation
export async function createReservation(req, res) {
  try {
    const reservationData = { ...req.body, bookedBy: req.user.id };

    // Optional: Check for overlapping reservations before creating a new one
    const overlappingReservation = await TableReservation.findOne({
        table: reservationData.table,
        branch: reservationData.branch,
        status: { $in: ['Pending', 'Confirmed'] },
        $or: [
            { startTime: { $lt: reservationData.endTime, $gte: reservationData.startTime } },
            { endTime: { $gt: reservationData.startTime, $lte: reservationData.endTime } }
        ]
    });

    if (overlappingReservation) {
        return res.status(409).json({ message: "This table is already booked for the selected time slot." });
    }

    const result = await TableReservation.create(reservationData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get all table reservations
export async function getAllReservations(req, res) {
  try {
    const result = await TableReservation.find().populate('table').populate('bookedBy', 'name email');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get reservations by branch
export async function getReservationsByBranch(req, res) {
  const { branch } = req.params;
  try {
    const reservations = await TableReservation.find({ branch }).populate('table').populate('bookedBy', 'name email');
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reservations", error: err.message });
  }
};

// Get table reservation by ID
export async function getReservationById(req, res) {
  const { id } = req.params;
  try {
    const result = await TableReservation.findById(id).populate('table').populate('bookedBy', 'name email');
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Update a table reservation by ID
export async function updateReservation(req, res) {
  const { id } = req.params;
  const reservationData = req.body;
  try {
    const result = await TableReservation.findByIdAndUpdate(id, reservationData, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Remove a table reservation by ID
export async function removeReservation(req, res) {
  const { id } = req.params;
  try {
    const result = await TableReservation.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "Reservation deleted successfully" });
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
