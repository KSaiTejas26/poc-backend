const CrudRepository  = require('./crudrepository');
const Orders = require('../Models/Order');
const VendorProducts=require('../Models/VendorProducts');
class OrderRepository extends CrudRepository
{
    constructor(){
        super(Orders);
    }
    async makeOrder(products,details)
    {
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
        const newobj={
            id:"444",
            order_id:orderId,
            vendor:vendorId,
            products:productList,
            status:"Pending"

        }
        const response=await VendorProducts.create(newobj);
        return response;

    }
}
module.exports=OrderRepository;