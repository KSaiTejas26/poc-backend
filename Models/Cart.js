const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  product_brand: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true,

  },
  image: {
    type: String,
    required: true
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'Customer'
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'product'
  },
  vendor_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'Vendor'
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;



