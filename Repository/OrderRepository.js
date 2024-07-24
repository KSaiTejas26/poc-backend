const CrudRepository  = require('./crudrepository');
// const Orders = require('../Models/Order');
const Orders = require('../Models/OrderTrackingMain');

// const VendorProducts=require('../Models/VendorProducts');
const VendorProducts=require('../Models/OrderTracking');

class OrderRepository extends CrudRepository
{
    constructor(){
        super(Orders);
    }
    async makeOrder(products,details)
    {
        console.log("make Orders",products);
        console.log("make Orders",details);
        const customerId=products[0].customer_id;
        const newobj={
            orderId:"2347",
            customer:customerId,
            vendorproducts:[],
            order_details:details
        }
        try {
            const response=await Orders.create(newobj);
            return response;
        } catch (error) {
            console.log(error);
            
        }
    }
    async makeVendorOrder(orderId,vendorId,productList){
        const newProdlist=productList.map((prod)=>{
            const obj={
                id:prod.product_id,
                capacity:1,
                status:"Pending"
            }
            return obj;
        })
        const newobj={
            id:"444",
            order_id:orderId,
            vendor:vendorId,
            products:newProdlist,
            status:"Pending"

        }
        const response=await VendorProducts.create(newobj);
        return response;

    }
}
module.exports=OrderRepository;