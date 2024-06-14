const CartRepository=require('../Repository/cartrepository');
class CartService{
    constructor(){
        this.CartRepository=new CartRepository();
    }
    async getCart(id){
        try{
            const response = this.CartRepository.getCart(id);
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
            const response = this.CartRepository.addCart(obj,id);
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
        
    }
    async deleteCart(id,customer,res)
    {
        try
        {
            const response = this.CartRepository.deleteCart(id,customer);
            return response;

        }
        catch(error)
        {
            console.log(error);
        }
    }

}
module.exports=CartService;