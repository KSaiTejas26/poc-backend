const mongoose = require('mongoose')

const Order = new mongoose.Schema({
    orderId:{
        type:String,
        required:true
    },
    customer:{
        type:mongoose.Schema.ObjectId,
        ref:'Customer',
        required:true
    },
    vendorproducts:{
        type:[mongoose.Schema.ObjectId],
        ref:'VendorProducts',
        required:true,
        default:[]
    },
    order_details:{
        first_name:{
            type:String
        },
        last_name:{
            type:String
        },
        email:{
            type:String
        },
        phone:{
            type:String
        },
        address:{
            type:String
        }

    }
});

const orders = mongoose.model('Order Tracking',Order);
module.exports = orders;