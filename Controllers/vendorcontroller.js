const VendorController = module.exports;
const VendorServices = require('../Services/Vendor');
const ProductServices = require('../Services/Product');
const OrderServices = require('../Services/Order');
const OrderTrackingMain = require('../Services/OrderTrackingServiceMain');
const OrderTracking = require('../Services/OrderTrackingservice');



VendorController.getAllVendorProducts = async (req, res) => {
  try {
    console.log('hiiii ', req.vendor);
    const vendorData = await new VendorServices().findOne(req.vendor.id);
    if (!vendorData) return res.status(204).json({ message: 'no vendor found' });
    const productIds = vendorData.products;
    console.log('productiddssss ', productIds);
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
    return res.status(200).json({ data, message: 'vendor profile found' });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error, message: 'error while getting the profile info of the vendor' });
  }
};

VendorController.deleteProduct = async (req, res) => {
  try {
    const data = await new ProductServices().remove(req.params.productId);
    const response = await new VendorServices().removeFromArray(req.vendor.id, req.params.productId);
    return res.status(200).json({ message: 'successfully deleted the product by vendor' });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error, message: 'error while deleting the product by vendor' });
  }
};

VendorController.deleteProduct1 = async (req, res) => {
  try {
    const data = await new ProductServices().remove(req.params.productId);
    const response = await new VendorServices().removeFromArray(req.params.vendorId, req.params.productId);
    return res.status(200).json({ message: 'successfully deleted the product by vendor' });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error, message: 'error while deleting the product by vendor' });
  }
};

VendorController.addProduct = async (req, res) => {
  try {
    const vid = req.vendor.id;
    const r = await new VendorServices().findOne(vid);
    const newData = {
      vid: vid,
      vname: r.vendor_first_name + " " + r.vendor_last_name
    }
    const data = await new ProductServices().create({ ...req.body, ...newData });
    const response = await new VendorServices().addtoArray(req.vendor.id, data._id);
    return res.status(200).json({ message: 'new product added by vendor successfully' });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error, message: 'error while adding the new product by vendor' });
  }
};

VendorController.addProductThroughExcel = async (req, res) => {
  console.log("API called");
  try {
    const vid = req.vendor.id;
    const r = await new VendorServices().findOne(vid);
    const newData = {
      vid:vid,
      vname:r.vendor_first_name+" "+r.vendor_last_name
    }
    console.log("in api",newData)
    console.log("in api2",req.body)
    const array=req.body;
    for (let i = 0; i < array.length; i++){
      const data = await new ProductServices().create({...array[i],...newData});
      const response = await new VendorServices().addtoArray(req.vendor.id, data._id);
    }
    // const data = await new ProductServices().create({...req.body,...newData});
    // const response = await new VendorServices().addtoArray(req.vendor.id, data._id);
    return res.status(200).json({ message: 'new products addeddfffffff by vendor successfully' });
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

VendorController.getsoloproduct = async (req, res) => {
  try {
    const response = await new ProductServices().findOne(req.params.id);
    res.status(200).send(response);
  }
  catch (e) {
    console.log('error while getting solo product details');
    res.status(404).send('error while getting solo product details ')
  }
}

VendorController.updateProduct = async (req, res) => {
  try {
    const response = await new ProductServices().update(req.params.id, req.body);
    res.status(200).send('succesfully updated the data of soloproduct page');
  }
  catch (e) {
    console.log('error while updating the product details in soloproduct page');
    res.status(404).send('error while updating the product details in soloproduct page');
  }
}


VendorController.getOrders = async (req, res) => {
  try {
    // console.log('heyyy ',req.vendor.id);
    const response = await new OrderTracking().getOrders(req.vendor.id);
    if (response === 'Not Found') res.status(404).send('No data found');
    res.status(200).json({ response });
  }
  catch (e) {
    console.log('error while fetching the orders details of products in vendors ', e);
    res.status(404).send('error while fetching the orders details of products in vendors');
  }
}


VendorController.updateStat = async (req, res) => {
  try {
    console.log('heyyyy in entered')
    console.log(req.vendor.id+" "+req.body.orderId+" "+req.body.productId+" "+req.body.id+" "+req.body.newStatus);
    const response = await new OrderTracking().updateProdStat(req.vendor.id,req.body.orderId,req.body.productId,req.body.id,req.body.newStatus);
    res.status(200).send('updated the status succesfully');
  }
  catch (e) {
    console.log('error while updating the status of the product by vendor');
    res.status(404).send('error while updating the status of the product by vendor');
  }
}