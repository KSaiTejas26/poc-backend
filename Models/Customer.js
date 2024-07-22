// const mongoose = require('mongoose');

// const customerSchema = new mongoose.Schema({
//   customer_first_name: {
//     type: String,
//     required: true
//   },
//   customer_last_name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   customer_image: {
//     type: String,
//     // required: true
//   },
//   phone_number:{
//     type: String,
//     required: true
//   },
//   address: [{
//     addressLine: {
//       type: String,
//       required: true
//     },
//     city: {
//       type: String,
//       required: true
//     },
//     state: {
//       type: String,
//       required: true
//     },
//     postalCode: {
//       type: String,
//       required: true
//     },
//     country: {
//       type: String,
//       required: true
//     }
//   }]
// });

// const Customer = mongoose.model('Customer', customerSchema);

// module.exports = Customer;



const mongoose = require('mongoose');
 
const customerSchema = new mongoose.Schema({
  customer_first_name: {
    type: String,
    required: true
  },
  customer_last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  customer_image: {
    type: String,
    // required: true
  },
  phone_number:{
    type: String,
    required: true
  },
  address: [{
    name: {
      type: String,
      required: true
    },
    mobile: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    pincode: {
      type: String,
      required: true
    }
  }]
});
 
const Customer = mongoose.model('Customer', customerSchema);
 
module.exports = Customer;
