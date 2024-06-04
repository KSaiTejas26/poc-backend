const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  // vendor_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   default: mongoose.Types.ObjectId,
  //   required: true
  // },
  vendor_first_name: {
    type: String,
    required: true
  },
  vendor_schemaendor_lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone_number: {
    type: String,
    required: true,
    unique: true
  },
  business_name: {
    type: String,
    required: true
  },
  gst_number: {
    type: String,
    required: true
  },
  business_registration_number: {
    type: String,
    required: true
  },
  company_website_url: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  street_address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip_code: {
    type: String,
    required: true
  },
  categories_list: {
    type: [String],
    required: true
  },
  bank_account_number: {
    type: String,
    required: true
  },
  bank_account_name: {
    type: String,
    required: true
  },
  ifsc_code: {
    type: String,
    required: true
  },
  account_holder_name: {
    type: String,
    required: true
  },
  expected_order_processing_time: {
    type: String,
    required: true
  },
  average_shipping_time: {
    type: String,
    required: true
  },
  vendor_image: {
    type: String,
    required: true
  },
});

const VendorRequest = mongoose.model('VendorRequest', vendorSchema);

module.exports = VendorRequest;
