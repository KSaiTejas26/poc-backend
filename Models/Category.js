const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    required: true
  },
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
