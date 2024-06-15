const CrudRepository  = require('./crudrepository');
const Product = require('../Models/Product');
class productrepository extends CrudRepository
{
    constructor(){
        super(Product);
    }
    async getProducts()
    {
        try{
            const response = await Product.find({});
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
        
    }
}
module.exports=productrepository;