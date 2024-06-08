const Categoryservice=require('../Services/categoryservice.js');

const categoryservice = new Categoryservice();
const getCategory= async (req,res)=>{
    try{
        const response = await categoryservice.getCategory();
        res.send(response);
    }
    catch(error)
    {
        res.status(500).json({error});
    }
}
module.exports=getCategory;