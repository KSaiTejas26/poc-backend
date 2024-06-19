const mongoose = require('mongoose')

const Order = new mongoose.Schema({
    orderId:{
        type:String,
        required:true
    },
    productDescription:[{
        pid:{
            type:String,
            required:true,
            ref:'Product'
        },
        capacity:{
            type:Number,
            required:true
        },
        cid:{
            type:String,
            required:true,
            ref:'Customer'
        },
        status:{
            type:String,
            enum:['Pending','Payment Done','Shipping Done','In Warehouse','Delivering','Delivered'],
            default:'Pending',
            required:true
        },
        date:{
            type:Date,
            required:true
        },
        deliverDate:{
            type:Date,
            required:true
        }
    }]
});

const orders = mongoose.model('Order Tracking',Order);
module.exports = orders;