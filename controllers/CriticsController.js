const Critics=require('../models/critics');
const getCritics=async (req,res)=>{
    try {
        const response=await Critics.find({product_name:req.params.pid});
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

const getOnlyNameCritics = async(req,res)=>{
    try
    {
        const response = await Critics.find({});
        const data = response.map(o=>o.product_name);
        res.json(data);
    }
    catch(e)
    {
        console.log(e);
    }
}
module.exports={getCritics,getOnlyNameCritics};