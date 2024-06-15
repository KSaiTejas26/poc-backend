const Productservice=require('../Services/Porductservice');

const productservice = new Productservice();
const getProducts= async (req,res)=>{
    try{
        const response = await productservice.getProduct();
        res.send(response);
       
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error});
    }
}
module.exports=getProducts;