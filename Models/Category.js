const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true
  },
  sub_categories_list: {
    type: [String],
    default: []
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
