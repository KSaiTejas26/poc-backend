const VendorController = module.exports;
const VendorServices = require('../Services/Vendor');
const ProductServices = require('../Services/Product');

// class VendorController {
//   async getAllVendorProducts(req, res) {
//     try {
//       const vendorData = await new VendorServices.findOne(req.params.id);
//       if (!vendorData) return res.status(204).send('no vendor found');
//       const productIds = vendorData.products; 
//       const products = await new ProductServices.findMany(productIds);
//       return res.status(200).send(products);
//     } catch (e) {
//       console.log('error while getting all products for vendor');
//       return res.status(404).send('error while getting all products for vendor');
//     }
//   }

//   async getVendorProfile(req, res) {
//     try {
//       const data = await new VendorServices.findOne(req.params.id);
//       return res.status(200).send(data);
//     } catch (e) {
//       console.log('error while getting the profile info of the vendor');
//       res.status(404).send('error while getting the profile info of the vendor');
//     }
//   }

//   async deleteProduct(req, res) {
//     try {
//       const data = await new ProductServices.remove(req.params.productId);
//       const response = await new VendorServices.removeFromArray(req.params.vendorId, req.params.productId);
//       return res.status(200).send('successfully deleted the product by vendor');
//     } catch (e) {
//       console.log('error while deleting the product by vendor');
//       res.status(404).send('error while deleting the product by vendor');
//     }
//   }

//   async addProduct(req, res) {
//     try {
//       const data = await new ProductServices.create(req.body);
//       const response = await new VendorServices.addtoArray(data._id, req.params.vendorId);
//       return res.status(200).send('new product added by vendor successfully');
//     } catch (e) {
//       console.log('error while adding the new product by vendor');
//       res.status(404).send('error while adding the new product by vendor');
//     }
//   }

//   async editProfile(req, res) {
//     try {
//       const data = await new VendorServices.update(req.params.id, req.body);
//       res.status(200).send('vendor profile updated successfully');
//     } catch (e) {
//       console.log('error while updating the profile details of the vendor');
//       res.status(404).send('error while updating the profile details of the vendor');
//     }
//   }
// }

// module.exports = VendorController;

// const VendorController = module.exports;

VendorController.getAllVendorProducts = async (req, res) => {
  try {
    const vendorData = await new VendorServices().findOne(req.vendor.id);
    if (!vendorData) return res.status(204).json({ message: 'no vendor found' });
    const productIds = vendorData.products;
    const products = await new ProductServices().findMany(productIds);
    return res.status(200).json({ products, message: 'products found' });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error, message: 'error while getting all products for vendor' });
  }
};

VendorController.getVendorProfile = async (req, res) => {
  try {
    const data = await new VendorServices().findOne(req.vendor.id);
    return res.status(200).json({ data, message: 'endor profile found' });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error, message: 'error while getting the profile info of the vendor' });
  }
};

VendorController.deleteProduct = async (req, res) => {
  try {
    const data = await new ProductServices().remove(req.params.productId);
    const response = await new VendorServices().removeFromArray(req.vendor.id, req.params.productId);
    return res.status(200).json({ message: 'uccessfully deleted the product by vendor' });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error, message: 'error while deleting the product by vendor' });
  }
};

VendorController.addProduct = async (req, res) => {
  try {
    const data = await new ProductServices().create(req.body);
    const response = await new VendorServices().addtoArray(req.vendor.id, data._id);
    return res.status(200).json({ message: 'new product added by vendor successfully' });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error, message: 'error while adding the new product by vendor' });
  }
};

VendorController.editProfile = async (req, res) => {
  try {
    console.log(req.body);
    const data = await new VendorServices().update(req.vendor.id, req.body);
    return res.status(200).json({ message: 'endor profile updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error, message: 'error while updating the profile details of the vendor' });
  }
};

VendorController.getsoloproduct = async (req,res)=>{
  try
  {
    const response = await new ProductServices().findOne(req.params.id);
    res.status(200).send(response);
  }
  catch(e)
  {
    console.log('error while getting solo product details');
    res.status(404).send('error while getting solo product details ')
  }
}

VendorController.updateProduct = async(req,res)=>{
  try
  {
    const response = await new ProductServices().update(req.params.id,req.body);
    res.status(200).send('succesfully updated the data of soloproduct page');
  }
  catch(e)
  {
    console.log('error while updating the product details in soloproduct page');
    res.status(404).send('error while updating the product details in soloproduct page');
  }
}