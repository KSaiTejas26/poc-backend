// const Admincontroller = module.exports;
const AdminServices = require('../Services/Admin');
const ProductServices = require('../Services/Product');
const VendorRequestService = require('../Services/VendorRequest');
const VendorServices = require('../Services/Vendor');

class AdminController {
    async getAllProducts(req, res) {
      try {
        const data = await new ProductServices.findAll();
        if (!data) res.status(204).send('no data');
        return res.status(200).send(data);
      } catch (e) {
        console.log('error in getting all products for admin');
        return res.status(404).send('error in getting all products for admin');
      }
    }
  
    async getProfile(req, res) {
      try {
        const data = await new AdminServices.findOne();
        return res.status(200).send(data);
      } catch (e) {
        console.log('error in getting all products for admin');
        return res.status(404).send('error in getting all products for admin');
      }
    }
  
    async getRequests(req, res) {
      try {
        const data = await new VendorRequestService.findAll();
        if (!data) res.status(204).send('no requests');
        return res.status(200).send(data);
      } catch (e) {
        console.log('error while fetching all vendor requests for admin in controller');
        return res.status(404).send('error while fetching all vendor requests for admin in controller');
      }
    }
  
    async getAllVendors(req, res) {
      try {
        const data = await new VendorServices.findAll();
        if (!data) res.status(204).send('no vendors');
        return res.status(200).send(data);
      } catch (e) {
        console.log('error while fetching all vendors for admin');
        res.status(404).send('error while fetching all vendors for admin');
      }
    }
  
    async deleteProduct(req, res) {
      try {
        const data = await new ProductServices.remove(req.params.productId);
        const response = await new VendorServices.removeFromArray(req.params.vendorId, req.params.productId);
        return res.status(200).send('successfully deleted the product by admin');
      } catch (e) {
        console.log('error while deleting the product by admin');
        res.status(404).send('error while deleting the product by admin');
      }
    }
  
    async deleteVendor(req, res) {
      try {
        const data = await new VendorServices.findOne(req.params.id);
        // Pending if vendor deleted should all the products associated to him must be deleted or what??
      } catch (e) {
        console.log('error while deleting the vendor');
        res.status(404).send('error while deleting the vendor by admin');
      }
    }
  
    async updateProfile(req, res) {
      try {
        const data = await new AdminServices.update(req.params.id, req.body);
        console.log('profile of admin updated successfully');
        res.status(200).send('profile of admin updated successfully');
      } catch (e) {
        console.log('error while updating the profile of admin');
        res.status(404).send('error while updating the profile of admin');
      }
    }
  
    async addProduct(req, res) {
      try {
        const data = await new ProductServices.create(req.body);
        const response = await new VendorServices.update(req.params.id, data._id);
        console.log('new product added successfully by admin');
        res.status(200).send('new product added successfully by admin');
      } catch (e) {
        console.log('error while adding the new product by admin');
        res.status(404).send('error while adding the new product by admin');
      }
    }
  }
  
  module.exports = AdminController;