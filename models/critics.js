const mongoose = require('mongoose');
 
const CriticsSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true

    },
    Dates:[{
        type:Date,
        required:true
    }
    ]
 
 
});
 
const Critics = mongoose.model('Critics', CriticsSchema);
 
module.exports = Critics;