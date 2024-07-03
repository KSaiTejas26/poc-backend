const Critics=require('../models/critics');
const getCritics=async (req,res)=>{
    try {
        const response=await Critics.find({});
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}
module.exports=getCritics;