

const CartService = require('../Services/cartservice');
const cartservice=new CartService();

const getCart=async (req,res)=>{
    try{
        const response = await cartservice.getCart(req.customer.id);
        res.send(response);
    }
    catch(error)
    {
        res.status(500).json({error});
    }
    
}
const addCart=async(req,res)=>{
    
    try{
        
        const response = await cartservice.addCart(req.body,req.customer.id);
        res.send(response);
    }
    catch(error)
    {

        res.status(500).json(error);
    }
}
module.exports={getCart,addCart};
