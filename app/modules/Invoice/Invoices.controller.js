import Invoice from "./Invoices.model.js";
import moment from 'moment';

// Get all invoices
export async function getAllInvoices(req, res) {
  try {
    const result = await Invoice.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getInvoicesByDateRange(req, res) {
  const { branch } = req.params;
  const { startDate, endDate } = req.query;

  try {
    if (!startDate || !endDate) {
      return res.status(400).json({ error: "Start date and end date are required" });
    }

    const invoices = await Invoice.find({
      branch,
      dateTime: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    });

    // Aggregate data by date
    const aggregatedData = invoices.reduce((result, invoice) => {
      const date = new Date(invoice.dateTime).toISOString().split('T')[0]; // Extract date only

      if (!result[date]) {
        result[date] = {
          date,
          orderCount: 0,
          totalQty: 0,
          totalSubtotal: 0,
          totalDiscount: 0,
          totalAmount: 0,
          totalVat: 0,
        };
      }

      // Safely calculate the values, defaulting to 0 if null or undefined
      result[date].orderCount += 1;
      result[date].totalQty += invoice.products?.reduce((sum, product) => sum + (product.qty || 0), 0) || 0;
      result[date].totalSubtotal += invoice.products?.reduce((sum, product) => sum + (product.subtotal || 0), 0) || 0;
      result[date].totalDiscount += invoice.discount || 0;
      result[date].totalAmount += invoice.totalAmount || 0;
      result[date].totalVat += invoice.vat || 0;

      return result;
    }, {});

    // If no invoices are found, return an empty array
    if (!invoices.length) {
      return res.status(200).json([]);
    }

    // Convert aggregated data into an array
    const responseData = Object.values(aggregatedData);

    res.status(200).json(responseData);
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


export async function getdatesByBranch(req, res) {
  const { branch, date } = req.params;

  // Validate branch and date
  if (!branch) {
    return res.status(400).json({ message: "Branch is required." });
  }

  if (!date || !moment(date, 'YYYY-MM-DD', true).isValid()) {
    return res.status(400).json({ message: "A valid date (YYYY-MM-DD) is required." });
  }

  try {
    // Fetch all invoices for the branch
    const branchOrders = await Invoice.find({ branch });

    // Filter invoices by the given date
    const todaysDate = date; // Assuming `date` is in 'YYYY-MM-DD' format
    const todaysInvoices = branchOrders.filter(invoice =>
      moment(invoice.dateTime).format('YYYY-MM-DD') === todaysDate
    );

    // If no orders found, return totals as 0
    if (todaysInvoices.length === 0) {
      return res.status(200).json({
        orders: [],
        totalOrders: 0,
        totalQty: 0,
        totalAmount: 0,
      });
    }

    // Calculate total quantities and amounts
    const totalQty = todaysInvoices.reduce((sum, order) => {
      return sum + order.products.reduce((qtySum, product) => qtySum + product.qty, 0);
    }, 0);

    const totalAmount = todaysInvoices.reduce((sum, order) => sum + order.totalAmount, 0);

    // Send the response
    res.status(200).json({
      orders: todaysInvoices,
      totalOrders: todaysInvoices.length,
      totalQty,
      totalAmount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while processing your request.", error: err.message });
  }
}


export async function getPendingByBranch(req, res) {
  const { branch, status } = req.params; 

  try {
   
    const invoices = await Invoice.find({ branch });

  
    const todaysDate = moment().format('YYYY-MM-DD');
    const todaysInvoices = invoices.filter(invoice =>
      moment(invoice.dateTime).format('YYYY-MM-DD') === todaysDate
    );

 
    const filteredInvoices = todaysInvoices.filter(invoice => invoice.orderStatus === status);

    res.status(200).json(filteredInvoices);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getItemByBranch(req, res) {
  const branch = req.params.branch;
  try {
    // Fetch all invoices for the branch
    const invoices = await Invoice.find({ branch });

    // Filter invoices by today's date
    const todaysDate = moment().format('YYYY-MM-DD');
    const todaysInvoices = invoices.filter(invoice => 
      moment(invoice.dateTime).format('YYYY-MM-DD') === todaysDate
    );


   

    // Aggregate product names and quantities
    const productMap = new Map();

    todaysInvoices.forEach(invoice => {
      invoice.products.forEach(product => {
        if (productMap.has(product.productName)) {
          productMap.set(product.productName, productMap.get(product.productName) + product.qty);
        } else {
          productMap.set(product.productName, product.qty);
        }
      });
    });

    // Prepare the result as an array of unique products with quantities
    const productsList = Array.from(productMap, ([productName, qty]) => ({
      productName,
      qty
    }));

    res.status(200).json(productsList);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}



export async function getDashboardByBranch(req, res) {
  const branch = req.params.branch;
  try {
    // Fetch all invoices for the branch
    const invoices = await Invoice.find({ branch });

    // Get this month's name, today's date, and yesterday's date
    const thisMonthName = moment().format('MMMM');
    const todaysDate = moment().format('YYYY-MM-DD');
    const yesterdaysDate = moment().subtract(1, 'days').format('YYYY-MM-DD');

    // Initialize data for daily sales and totals
    const startOfMonth = moment().startOf('month');
    const endOfMonth = moment().endOf('month');
    const dailySales = {};
    let currentDay = startOfMonth.clone();

    while (currentDay.isSameOrBefore(endOfMonth)) {
      const day = currentDay.format('YYYY-MM-DD');
      dailySales[day] = { totalSale: 0, totalItems: 0 };
      currentDay.add(1, 'day');
    }

    let todaysTotalSale = 0;
    let yesterdaysTotalSale = 0;
    let todaysTotalItems = 0;

    // Process invoices
    invoices.forEach(invoice => {
      const invoiceDate = moment(invoice.dateTime).format('YYYY-MM-DD');

      if (dailySales[invoiceDate]) {
        dailySales[invoiceDate].totalSale += invoice.totalAmount;
        dailySales[invoiceDate].totalItems += invoice.products.reduce((sum, product) => sum + product.qty, 0);
      }

      // Today's sales and total items
      if (invoiceDate === todaysDate) {
        todaysTotalSale += invoice.totalAmount;
        todaysTotalItems += invoice.products.reduce((sum, product) => sum + product.qty, 0);
      }

      // Yesterday's sales
      if (invoiceDate === yesterdaysDate) {
        yesterdaysTotalSale += invoice.totalAmount;
      }
    });
   
    const endOfDay = moment().endOf("day");
    // Get today's pending orders
    const todaysPendingOrders = invoices.filter(invoice => {
      const invoiceDate = moment(invoice.dateTime);
      return (
        invoice.orderStatus === "pending" &&
        invoiceDate.isBetween(todaysDate, endOfDay, null, "[]")
      );
    }).length;

    // Prepare daily sales array for response
    const dailySalesArray = Object.keys(dailySales).map(date => ({
      date,
      totalSale: dailySales[date].totalSale,
      totalItems: dailySales[date].totalItems
    }));

    // Prepare response
    const response = {
      thisMonthName,
      todaysDate,
      yesterdaysDate,
      dailySales: dailySalesArray,
      todaysTotalSale,
      yesterdaysTotalSale,
      todaysTotalItems,
      todaysPendingOrders,
    };

    res.status(200).json(response);
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
