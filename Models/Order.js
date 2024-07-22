// const mongoose = require('mongoose')
 
// const Order = new mongoose.Schema({
//     orderId:{
//         type:String,
//         required:true
//     },
//     customer:{
//         type:mongoose.Schema.ObjectId,
//         ref:'Customer',
//         required:true
//     },
//     vendorproducts:{
//         type:[mongoose.Schema.ObjectId],
//         ref:'VendorProducts',
//         required:true,
//         default:[]
//     },
//     order_details:{
//         mobileNumber:{
//             type:String,
//             required:true
//         },
//         address:{
//             type:String,
//             required:true
//         },
//         city:{
//             type:String,
//             required:true
//         },
//         state:{
//             type:String,
//             required:true
//         },
//         pinCode:{
//             type:String,
//             required:true
//         },
//         selected:{
//             type:Boolean,
//             required:true
//         }
//     },
//     status:{
//         type:String,
//         required:true,
//         enum:["Pending","Delivered"],
//         default:"Pending"
//     },
//     order_date:{
//         type:Date,
//         required:true,
//         default:Date.now
//     },
//     final_date:{
//         type:Date,
//         required:true,
//         default:function () {
//             const defaultDate = new Date(this.order_date);
//             defaultDate.setDate(defaultDate.getDate() + 7);
//             return defaultDate;
//         }
//     }
 
// });
 
// const orders = mongoose.model('Order Tracking',Order);
// module.exports = orders;