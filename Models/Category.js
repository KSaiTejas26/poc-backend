const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  // category_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   default: mongoose.Types.ObjectId,
  //   required: true
  // },
  name: {
    type: String,
    required: true
  },
  // sub_categories_list: {
  //   type: [String],
  //   default: []
  // }
  sub_categories_list:{
    type:[
      {
        name:{
          type:String,
          required:true
        },
        image:{
          type:String,
          required:true
        }
      }
    ],
    required:true
  },
  image:{
    type:String,
    required:true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
