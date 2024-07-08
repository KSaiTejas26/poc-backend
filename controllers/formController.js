const Metrics=require('../models/metrics');
const addData=async (req,res)=>{
    try {
        const obj=req.body;
        const exist=await Metrics.find({product_name:obj.product_name});
        console.log(exist);
        if(exist.length==0)
        {
            
            const newobj={
                product_name:obj.product_name,
                info:[]
            }
            const response=await Metrics.create(newobj);
            
        }
        product=await Metrics.find({product_name:obj.product_name});
        console.log(product[0]);
        product[0].info.push(req.body.info);
        product[0].save();
        res.send(product);
        
    } catch (error) {   
        console.log(error);
        
    }
}
module.exports=addData;