const VendorController = module.exports;
import VendorServices from '../Services/Vendor';
import ProductServices from '../Services/Product';

VendorController.getallvendorproducts = async (req, res) => {
  try {
    const vendorData = await new VendorServices.findOne(req.params.id);
    if (!vendorData) return res.status(204).send('no vendor found');
    const productIds = vendorData.products; 
    const products = await new ProductServices.findMany(productIds);
    return res.status(200).send(products);
  } catch (e) {
    console.log('error while getting all products for vendor');
    return res.status(404).send('error while getting all products for vendor');
  }
}


VendorController.getvendorprofile = async(req,res) =>{
    try{
        const data = await new VendorServices.findOne(req.params.id);
        return res.status(200).send(data);
    }
    catch(e)
    {
        console.log('error while getting the profile info of the vendor');
        res.status(404).send('error while getting the profile info of the vendor');
    }
}

Vendorcontroller.delete = async(req,res) =>{
  try
  {
      const data = await new ProductServices.remove(req.params.productId);
      const response = await new VendorServices.removeFromArray(req.params.vendorId,req,params.productId);
      return res.status(200).send('succesfully deleted the product by vendor');
  }
  catch(e)
  {
      console.log('error while deleting the product by vendor')
      res.status(404).send('error while deleting the product by vendor')
  }
}

VendorController.addProduct = async(req,res) =>{
  try
  {
    const data = await new ProductServices.add(req.body);
    const response = await new VendorServices.addtoArray(data._id,req.params.vendorId);
    return res.status(200).send('new product added by vendor succesfully')
  }
  catch(e)
  {
    console.log('error while adding the new product by vendor')
    res.status(404).send('error while adding the new product by vendor')
  }
}

VendorController.editprofile = async(req,res) =>{
  try
  {
    const data = await new VendorServices.update(req.params.id,req.body);
    res.status(200).status('vendor profile updated succesfully');
  }
  catch(e)
  {
    console.log('error while updating the profile details of the vendor');
    res.status(404).send('error while updating the profile details of the vendor')
  }
}