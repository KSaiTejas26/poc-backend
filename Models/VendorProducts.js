const mongoose = require("mongoose");
 
const VendorProductsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order Tracking",
    required: true
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
  },
  products: {
    type: [{
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
      },
      capacity: {
        type: Number,
        required: true,
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
        required: true
      }
    }
    ],
    required:true
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