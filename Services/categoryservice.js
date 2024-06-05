
const CategoryRepository=require('../Repository/categoryrepository');
class Categoryservice
{
    constructor()
    {
        this.CategoryRepository=new CategoryRepository();
    }
    async getCategory(){
        try{
            const response = this.CategoryRepository.getCategory();
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
    }
}  
module.exports=Categoryservice;