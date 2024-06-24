const mongoose = require("mongoose");

const VendorProductsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  order_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"orders",
    required:true
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
  },
  products: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "product",
  },
  status: {
    type: String,
    enum: [
      "Pending",
      "Payment Done",
      "Shipping Done",
      "In Warehouse",
      "Out for Delivery",
      "Delivered",
    ],
    default: "Pending",
    required: true,
  },
});

const VendorProducts = mongoose.model("VendorProducts", VendorProductsSchema);

module.exports = VendorProducts;
