const Corona =require('../models/data');
const getData=async (req,res)=>{
    try {
        const response = await Corona.find({}); 
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}
module.exports=getData