const CrudRepository  = require('./crudrepository');
const Cart = require('../Models/Cart');
class cartrepository extends CrudRepository
{
    constructor(){
        super(Cart);
    }
    async getCart(id)
    {
        try{
            const response = await Cart.find({customer_id:id});
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
        
    }
    async addCart(obj,id)
    {
        
        try{
            
            const cobj={
                "product_name":obj.product_name,
                "product_brand":obj.product_brand,
                "price":obj.price,
                "image":obj.image,
                "customer_id":id

            }
            const response = await Cart.create(cobj);
            
        }
        catch(error){
            console.log(error);
        }
    }
}
module.exports=cartrepository;