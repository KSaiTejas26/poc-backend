const Critics=require('../models/critics');
const getCritics=async (req,res)=>{
    try {
        const response=await Critics.find({product_name:req.params.pid});
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

const getOnlyNameCritics = async (req, res) => {
    try {
      // Fetch all critics from the database
      const response = await Critics.find({});
  
      // Extract the product_name values and sort them in descending order
      const sortedProductNames = response
        .map(o => o.product_name)
        .sort((b, a) => b.localeCompare(a)); // Sort in descending order
  
      // Send the sorted product names as a JSON response
      res.json(sortedProductNames);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'An error occurred while processing the request.' });
    }
  };
  


module.exports={getCritics,getOnlyNameCritics};