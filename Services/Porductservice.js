
const ProductRepository=require('../Repository/Productrepositiory');
class Productservice
{
    constructor()
    {
        this.ProductRepository=new ProductRepository();
    }
    async getProduct(){
        try{
            const response = await this.ProductRepository.getProducts();
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
    }
}  
module.exports=Productservice;