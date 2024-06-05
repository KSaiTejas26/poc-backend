const CrudRepository  = require('./crudrepository');
const Category = require('../Models/Category');
class categoryrepository extends CrudRepository
{
    constructor(){
        super(Category);
    }
    async getCategory()
    {
        try{
            const response = await Category.find({});
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
        
    }
}
module.exports=categoryrepository;