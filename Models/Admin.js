const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
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
  admin_image: {
    type: String,
    // required: true
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
