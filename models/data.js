const mongoose = require('mongoose');
 
const coronaSchema = new mongoose.Schema({
 
  Month: {
    type: String,
    enum: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    required: true
  },
  NumberOfRecovered: {
    type: Number,
    required: true
  },
  NumberOfDeaths: {
    type: Number,
    required: true
  },
  NumberOfNewCases: {
    type: Number,
    required: true
  }
 
});
 
const Corona = mongoose.model('corona', coronaSchema);
 
module.exports = Corona;