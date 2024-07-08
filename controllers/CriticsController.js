const Critics = require("../models/critics");
const getCritics = async (req, res) => {
  try {
    const response = await Critics.find({ product_name: req.params.pid });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

const getOnlyNameCritics = async (req, res) => {
  try {
    // Fetch all critics from the database
    const response = await Critics.find({});

    // Extract the product_name values and sort them in descending order
    const sortedProductNames = response
      .map((o) => o.product_name)
      .sort((b, a) => b.localeCompare(a)); // Sort in descending order

    // Send the sorted product names as a JSON response
    res.json(sortedProductNames);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "An error occurred while processing the request." });
  }
};

const getScomWarning = async (req, res) => {
  try {
    console.log("hiiiiiiiiiiiiiiiiii", req.body);
    const data = req.body;
    let response;
    if (data === "All") {
      response = await Critics.find(
        {},
        { "info.scom_alerts.total_warnings": 1, "info.Date": 1 }
      ); // Fetch all warnings
    } else if (Array.isArray(data)) {
      response = await Critics.find(
        { product_name: { $in: data } },
        { "info.scom_alerts.total_warnings": 1, "info.Date": 1 }
      ); // Fetch warnings for multiple products
    } else {
      response = await Critics.findOne(
        { product_name: data },
        { "info.scom_alerts.total_warnings": 1, "info.Date": 1 }
      ); // Fetch warnings for a specific product
    }

    res.json(response);
  } catch (e) {
    console.log(e, "error while fetching the warnings of scom");
    res.status(500).send("Internal Server Error");
  }
};

const getAllScomWarning = async (req, res) => {
  try {
    const response = await Critics.find(
      {},
      { "info.scom_alerts.total_warnings": 1, "info.Date": 1 }
    );
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
};

const getAllScomCrits = async (req, res) => {
  try {
    const response = await Critics.find(
      {},
      { "info.scom_alerts.total_warnings": 1, "info.Date": 1 }
    );
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
};


const getScomCrits = async (req, res) => {
  try {
    console.log("hiiiiiiiiiiiiiiiiii", req.body);
    const data = req.body;
    let response;
    if (data === "All") {
      response = await Critics.find(
        {},
        { "info.scom_alerts.total_critical": 1, "info.Date": 1 }
      ); // Fetch all warnings
    } else if (Array.isArray(data)) {
      response = await Critics.find(
        { product_name: { $in: data } },
        { "info.scom_alerts.total_critical": 1, "info.Date": 1 }
      ); // Fetch warnings for multiple products
    } else {
      response = await Critics.findOne(
        { product_name: data },
        { "info.scom_alerts.total_warnings": 1, "info.Date": 1 }
      ); // Fetch warnings for a specific product
    }

    res.json(response);
  } catch (e) {
    console.log(e, "error while fetching the warnings of scom");
    res.status(500).send("Internal Server Error");
  }
};


const getAll = async (req, res) => {
  try {
    console.log('boddd ',req.body);
    const { products } = req.body;
    const response = await Critics.find({ product_name: { $in: products } });
    console.log('ress ',response);
    res.status(200).json(response);
  } catch (error) {
    console.error(error, 'error while fetching the product details');
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getCritics, getOnlyNameCritics, getScomWarning ,getAllScomWarning,getScomCrits,getAllScomCrits,getAll};
