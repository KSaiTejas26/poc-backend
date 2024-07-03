const Form=require('../models/form');
const addData=async (req,res)=>{
    try {
        const obj=req.body;
        const response=await Form.create(obj);
        res.send(response);
        
    } catch (error) {   
        console.log(error);
        
    }
}
module.exports=addData;