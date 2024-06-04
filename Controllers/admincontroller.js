const AdminServices = require('../Services/Admin');
const ProductServices = require('../Services/Product');
const VendorRequestService = require('../Services/VendorRequest');
const VendorServices = require('../Services/Vendor');
// const AdminController = module.exports;
// class AdminController {
//     async getAllProducts(req, res) {
//         try {
//             const data = await ProductServices.findAll();
//             if (!data) return res.status(204).send('no data');
//             return res.status(200).send(data);
//         } catch (e) {
//             console.log('error in getting all products for admin', e);
//             return res.status(404).send('error in getting all products for admin');
//         }
//     }

//     async getProfile(req, res) {
//         try {
//             const data = await AdminServices.findOne(req.params.id);
//             return res.status(200).send(data);
//         } catch (e) {
//             console.log('error in getting admin profile', e);
//             return res.status(404).send('error in getting admin profile');
//         }
//     }

//     async getRequests(req, res) {
//         try {
//             const data = await VendorRequestService.findAll();
//             if (!data) return res.status(204).send('no requests');
//             return res.status(200).send(data);
//         } catch (e) {
//             console.log('error while fetching all vendor requests for admin in controller', e);
//             return res.status(404).send('error while fetching all vendor requests for admin in controller');
//         }
//     }

//     async getAllVendors(req, res) {
//         try {
//             const data = await VendorServices.findAll();
//             if (!data) return res.status(204).send('no vendors');
//             return res.status(200).send(data);
//         } catch (e) {
//             console.log('error while fetching all vendors for admin', e);
//             return res.status(404).send('error while fetching all vendors for admin');
//         }
//     }

//     async deleteProduct(req, res) {
//         try {
//             await ProductServices.remove(req.params.productId);
//             await VendorServices.removeFromArray(req.params.vendorId, req.params.productId);
//             return res.status(200).send('successfully deleted the product by admin');
//         } catch (e) {
//             console.log('error while deleting the product by admin', e);
//             return res.status(404).send('error while deleting the product by admin');
//         }
//     }

//     async deleteVendor(req, res) {
//         try {
//             const data = await VendorServices.findOne(req.params.id);
//             // Handle deletion logic if needed
//             return res.status(200).send('successfully deleted the vendor');
//         } catch (e) {
//             console.log('error while deleting the vendor', e);
//             return res.status(404).send('error while deleting the vendor by admin');
//         }
//     }

//     async updateProfile(req, res) {
//         try {
//             await AdminServices.update(req.params.id, req.body);
//             console.log('profile of admin updated successfully');
//             return res.status(200).send('profile of admin updated successfully');
//         } catch (e) {
//             console.log('error while updating the profile of admin', e);
//             return res.status(404).send('error while updating the profile of admin');
//         }
//     }

//     async addProduct(req, res) {
//         try {
//             const data = await ProductServices.create(req.body);
//             await VendorServices.update(req.params.id, data._id);
//             console.log('new product added successfully by admin');
//             return res.status(200).send('new product added successfully by admin');
//         } catch (e) {
//             console.log('error while adding the new product by admin', e);
//             return res.status(404).send('error while adding the new product by admin');
//         }
//     }
// }

// module.exports = AdminController;

const AdminController = module.exports;

AdminController.getAllProducts = async (req, res) => {
  try {
    const data = await new ProductServices().findAll();
    if (!data) return res.status(204).json({ message: 'no data' });
    return res.status(200).json({ data, message: 'products found' });
  } catch (error) {
    console.error('error in getting all products for admin', error);
    return res.status(404).json({ error, message: 'error in getting all products for admin' });
  }
};

AdminController.getProfile = async (req, res) => {
  try {
    const data = await new AdminServices().findOne(req.params.id);
    return res.status(200).json({ data, message: 'admin profile found' });
  } catch (error) {
    console.error('error in getting admin profile', error);
    return res.status(404).json({ error, message: 'error in getting admin profile' });
  }
};

AdminController.getRequests = async (req, res) => {
  try {
    const data = await new VendorRequestService().findAll();
    if (!data) return res.status(204).json({ message: 'no requests' });
    return res.status(200).json({ data, message: 'requests found' });
  } catch (error) {
    console.error('error while fetching all vendor requests for admin in controller', error);
    return res.status(404).json({ error, message: 'error while fetching all vendor requests for admin in controller' });
  }
};

AdminController.getAllVendors = async (req, res) => {
  try {
    const data = await new VendorServices().findAll();
    if (!data) return res.status(204).json({ message: 'no vendors' });
    return res.status(200).json({ data, message: 'vendors found' });
  } catch (error) {
    console.error('error while fetching all vendors for admin', error);
    return res.status(404).json({ error, message: 'error while fetching all vendors for admin' });
  }
};

AdminController.deleteProduct = async (req, res) => {
  try {
    await new ProductServices().remove(req.params.productId);
    await new VendorServices().removeFromArray(req.params.vendorId, req.params.productId);
    return res.status(200).json({ message: 'successfully deleted the product by admin' });
  } catch (error) {
    console.error('error while deleting the product by admin', error);
    return res.status(404).json({ error, message: 'error while deleting the product by admin' });
  }
};

AdminController.deleteVendor = async (req, res) => {
  try {
    const data = await new VendorServices().findOne(req.params.id);
    // Handle deletion logic if needed
    return res.status(200).json({ message: 'successfully deleted the vendor' });
  } catch (error) {
    console.error('error while deleting the vendor', error);
    return res.status(404).json({ error, message: 'error while deleting the vendor by admin' });
  }
};

AdminController.updateProfile = async (req, res) => {
  try {
    // const data = "665f0558f4e120a00e034496";
    await new AdminServices().update(req.params.id,req.body);
    console.log('profile of admin updated successfully');
    return res.status(200).json({ message: 'profile of admin updated successfully' });
  } catch (error) {
    console.error('error while updating the profile of admin', error);
    return res.status(404).json({ error, message: 'error while updating the profile of admin' });
  }
};

AdminController.addProduct = async (req, res) => {
  try {
    const data = await new ProductServices().create(req.body);
    await new VendorServices().addtoArray(req.params.id, data._id);
    console.log('new product added successfully by admin');
    return res.status(200).json({ message: 'new product added successfully by admin' });
  } catch (error) {
    console.error('error while adding the new product by admin', error);
    return res.status(404).json({ error, message: 'error while adding the new product by admin' });
  }
};
