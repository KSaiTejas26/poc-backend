const mongoose = require('mongoose');

const ExcelSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    info:[{
        ticket:{
            type:String,
            required:true,
            unique:true
        },
        impact_duration:{
            type:Number,
            required:true
        },
        root_cause_code:{
            type:String,
            required:true
        },
        Date:{
            type:Date,
            required:true
        },
        Resolution_owner:{
            type:String, 
            required:true
        },
        Business_unit:{
            type:String,
            required:true
        },
        solvedBy:{
            type:String,
            required:true
        }
    }]
});

const Excel = mongoose.model('Excel', ExcelSchema);
 
module.exports = Excel;