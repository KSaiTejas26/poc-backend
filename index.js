const XLSX = require('xlsx');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Critics = require('./Critics'); // Adjust the path if needed

// Helper function to convert date string to Date object
const formatDate = (dateString) => {
  // Implement your date parsing logic here. This is just a placeholder.
  return new Date(dateString);
};

app.get('/api/uploadExcel', async (req, res) => {
  const workbook = XLSX.readFile('criticals.xlsx');
  const sheetNameList = workbook.SheetNames;

  const data = [];

  sheetNameList.forEach((y) => {
    const worksheet = workbook.Sheets[y];
    const headers = {};
    for (const z in worksheet) {
      if (z[0] === '!') continue;

      // Parse out the column, row, and value
      const col = z.substring(0, 1);
      const row = parseInt(z.substring(1));
      const value = worksheet[z].v;

      // Store header names
      if (row === 1) {
        headers[col] = value;
        continue;
      }

      // Initialize or retrieve existing data entry for the row
      const rowIndex = row - 2; // Adjust for zero-based index after dropping the header row
      if (!data[rowIndex]) data[rowIndex] = {};

      // Map Excel columns to schema fields
      switch (headers[col]) {
        case 'Primary Product':
          data[rowIndex].product_name = value;
          break;
        case 'IT Ticket':
          if (!data[rowIndex].info) data[rowIndex].info = [];
          data[rowIndex].info.push({ ticket: value });
          break;
        case 'Impact Duration':
          if (data[rowIndex].info.length > 0) {
            data[rowIndex].info[data[rowIndex].info.length - 1].impact_duration = parseFloat(value);
          }
          break;
        case 'Root Cause Code':
          if (data[rowIndex].info.length > 0) {
            data[rowIndex].info[data[rowIndex].info.length - 1].root_cause_code = value;
          }
          break;
        case 'Created Date':
          if (data[rowIndex].info.length > 0) {
            data[rowIndex].info[data[rowIndex].info.length - 1].Date = formatDate(value);
          }
          break;
      }
    }
  });

  // Process and save data to MongoDB
  try {
    for (const item of data) {
      const { product_name, info } = item;

      if (!product_name || !info || info.length === 0) {
        console.log(`Skipping invalid data for ${product_name}`);
        continue;
      }

      // Check if product_name already exists
      let existingCritic = await Critics.findOne({ product_name });

      if (existingCritic) {
        // Update existing critic with new info if tickets are unique
        info.forEach(newInfo => {
          if (!existingCritic.info.some(existingInfo => existingInfo.ticket === newInfo.ticket)) {
            existingCritic.info.push(newInfo);
          } else {
            console.log(`Duplicate ticket ${newInfo.ticket} for ${product_name}, skipping.`);
          }
        });
        await existingCritic.save();
        console.log(`Updated critic data for ${product_name}`);
      } else {
        // Create new Critics document and save to MongoDB
        const critic = new Critics({
          product_name,
          info
        });
        await critic.save();
        console.log(`Saved critic data for ${product_name}`);
      }
    }

    res.status(200).json({ message: 'Data imported and saved successfully' });
  } catch (error) {
    console.error('Error saving critic data:', error);
    res.status(500).json({ error: 'An error occurred while saving critic data' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
