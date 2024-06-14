const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true
  },
  sub_categories_list: {
    type: [{
      name:{ type: String},
      image:{type: String}
    }],
    default: []
  },
  image:{type: String}
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
