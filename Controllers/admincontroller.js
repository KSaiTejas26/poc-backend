const AdminServices = require('../Services/Admin');
const ProductServices = require('../Services/Product');
const VendorRequestService = require('../Services/VendorRequest');
const VendorServices = require('../Services/Vendor');
const VendorService = require('../Services/Vendor');
const VendorRequest = require('../Models/VendorRequest');
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
    const data = await new VendorServices().remove(req.params.id);
    console.log('hiiii ',req.body);
    const array = data.products;
    for(var i=0;i<array.length;i++)
    {
      const response = await new ProductServices().remove(array[i]);
    }
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
    // console.log('heyyyyyyyyyyyyyyyyyyyyyyyyyyy',req.body," ",req.params.id)
    const data = await new ProductServices().create(req.body);
    console.log('dataaasa ',data._id);
    await new VendorServices().addtoArray(req.params.id, data._id);
    console.log('new product added successfully by admin');
    return res.status(200).json({ message: 'new product added successfully by admin' });
  } catch (error) {
    console.error('error while adding the new product by admin', error);
    return res.status(404).json({ error, message: 'error while adding the new product by admin' });
  }
};

AdminController.acceptRequest = async (req,res)=>{
  try
  {
    const data = await new VendorRequestService().remove(req.params.id);
    const newData = {
      _id: data._id,
      vendor_first_name: data.vendor_first_name,
      vendor_last_name: data.vendor_last_name,
      email: data.email,
      phone_number: data.phone_number,
      business_name: data.business_name,
      gst_number: data.gst_number,
      business_registration_number: data.business_registration_number,
      company_website_url: data.company_website_url,
      password: data.password,
      country: data.country,
      street_address: data.street_address,
      city: data.city,
      state: data.state,
      zip_code: data.zip_code,
      categories_list: data.categories_list,
      bank_account_number: data.bank_account_number,
      bank_account_name: data.bank_account_name,
      ifsc_code: data.ifsc_code,
      account_holder_name: data.account_holder_name,
      expected_order_processing_time: data.expected_order_processing_time,
      average_shipping_time: data.average_shipping_time,
      products: []
    }
    const response = await new VendorServices().create(newData);
    console.log(data,"    ",newData);
    console.log('request accepted succesfully');
    res.status(200).json({message:'request accepted succesfully'});
  }
  catch(error)
  {
    console.log('error while accepting the request by admin ',error);
    res.status(404).json({error,message:"error while accepting the request by admin"});
  }
}


AdminController.rejectedRequest = async (req,res)=>{
  try
  {
    const data = await new VendorRequestService().remove(req.params.id);
    console.log('request rejected succesfully');
    res.status(200).json({message:'request rejected succesfully'});
  }
  catch(error)
  {
    console.log('error while accepting the request by admin ',error);
    res.status(404).json({error,message:"error while accepting the request by admin"});
  }
}


AdminController.addVendor = async (req,res)=>{
  try
  {
    const response = await new VendorService().create(req.body);
    console.log('new vendor added succesfully');
    res.status(200).send('new vendor added succesfully'); 
  }
  catch(e)
  {
    console.log('error while adding the vendor by admin');
    res.status(404).send('Error while adding the vendor by admin')
  }
}

AdminController.deleteManyRequests = async (req,res)=>{
  try
  {
    const arr = req.body;
    console.log(req.body);
    for(var i=0;i<arr.length;i++)
    {
      const response = await new VendorService().remove(arr[i]);
      console.log('euuuuuuu',arr[i]);
    }
    console.log('deleted vendors succesfully using checkboxes');
    res.status(200).send('deleted vendors succesfully using checlboxes');
  }
  catch(e)
  {
    console.log('error while deleting the requests by admin using checkboxes');
    res.status(404).send('error while deleting the requests by admin using checkboxes');
  }
}

AdminController.acceptSelectedRequest = async (req,res)=>{
  try
  {
    const arr = req.body;
    for(var i=0;i<arr.length;i++)
    {
      const response = await new VendorRequestService().remove(arr[i]);
      const data = response;
      const newData = {
        _id: data._id,
        vendor_first_name: data.vendor_first_name,
        vendor_last_name: data.vendor_last_name,
        email: data.email,
        phone_number: data.phone_number,
        business_name: data.business_name,
        gst_number: data.gst_number,
        business_registration_number: data.business_registration_number,
        company_website_url: data.company_website_url,
        password: data.password,
        country: data.country,
        street_address: data.street_address,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code,
        categories_list: data.categories_list,
        bank_account_number: data.bank_account_number,
        bank_account_name: data.bank_account_name,
        ifsc_code: data.ifsc_code,
        account_holder_name: data.account_holder_name,
        expected_order_processing_time: data.expected_order_processing_time,
        average_shipping_time: data.average_shipping_time,
        vendor_image : data.vendor_image,
        products: []
      }
      const data1 = await new VendorServices().create(newData);
    }
    console.log('requests of vendors accepted succesfully by admin');
    res.status(200).send('request of vendors accepted succesfully by admin');
  }
  catch(e)
  {
    console.log('error while accepting the checkbox request by admin');
    res.status(200).send('error while accepting the checkbox request by admin')
  }
}

AdminController.rejectSelectedRequest = async (req,res)=>{
  try
  {
    const arr = req.body;
    for(var i=0;i<arr.length;i++)
    {
      const response = await new VendorRequestService().remove(arr[i])
    }
    console.log('succesfully rejected vendor request by admin');
    res.status(200).send('sucessfully rejected vendor request by admin');
  }
  catch(e)
  {
    console.log('error while rejecting the request of vendor by admin');
    res.status(404).send('error while rejecting the request of vendor by admin');
  }
}