const orders = require('../Models/Order');
const vendorProducts=require('../Models/VendorProducts');
const orderRepository=require('../Repository/OrderRepository')
class OrderService{
    constructor(){
        this.orderRepository=new orderRepository();
    }
    async getOrder(req,res){
      const response =await orders.find({customer:req.customer.id})
      .populate({
        path: 'vendorproducts',
        populate: {
          path: 'products.id',
          model: 'Product'
        }
      });
      res.send(response);
    }
    async makeOrder(req,res){
        const {products,details}=req.body;
        console.log("HEloooooooo");
        const uniqueVendors = products.reduce((acc, product) => {
            const vendorId = product.vendor_id;
            if (!acc.includes(vendorId)) {
              acc.push(vendorId);
            }
            return acc;
          }, []);
        const groupedByVendor = products.reduce((acc, product) => {
            const vendorId = product.vendor_id;
            if (!acc[vendorId]) {
              acc[vendorId] = [];
            }
            acc[vendorId].push(product);
            return acc;
          }, {});
        const response=await this.orderRepository.makeOrder(products,details);
        console.log("response",response);
    
        const vendorProducts = await Promise.all(
            uniqueVendors.map(async (vendor) => {
                const res = await this.orderRepository.makeVendorOrder(response._id, vendor, groupedByVendor[vendor]);
                return res._id;
            })
        );
        console.log(vendorProducts);
        const obj=await orders.findById(response._id);
        vendorProducts.map((vendorproductId)=>{
            obj.vendorproducts.push(vendorproductId);
        });
        await obj.save();
        res.status(200).json(obj);
    }
}
module.exports=OrderService;