const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ProductSchema = new Schema({
  pname: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  vid: {
    type: String,
    required: true
  },
  vname: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  productDetails: {
    description: {
      type: String,
      required: true
    },
    designerName: {
      type: String,
      required: true
    },
    countryOfOrigin: {
      type: String,
      required: true
    },
    material: {
      type: String,
      required: true
    },
    dimensions: {
      type: String,
      required: true
    }
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  // color: {
  //   type: [String],
  //   required: true
  // }
});
 
const product = mongoose.model('Product', ProductSchema);
module.exports = product;