const orderService=require('../Services/OrderService');
const OrderService=new orderService();
const makeorder=async (req,res)=>{
    try {
        const response=await OrderService.makeOrder(req,res);
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}
const getOrder=async (req,res)=>{
    try {
        const response=await OrderService.getOrder(req,res);
    } catch (error) {
        console.log(error);
    }
}
module.exports={ makeorder,getOrder };