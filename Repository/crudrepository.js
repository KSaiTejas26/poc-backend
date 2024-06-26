const mongoose = require('mongoose')
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong ");
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const result = await this.model.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const result = await this.model.findById(id)
      return result;
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }

  async getAll() {
    try {
      console.log('in repo getalll')
      const result = await this.model.find({});
      console.log('geting ', result)
      return result;
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      console.log(id + "  " + JSON.stringify(data));
      const result = await this.model.findByIdAndUpdate(id, data, {
        new: true,
        returnDocument: "after"
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }

  // async updateImageUrl(id, data) {
  //   try {
  //     console.log(id+"  "+data.image);
  //     const result = await this.model.findByIdAndUpdate(id, data.image, {
  //       new: true,
  //     });
  //     console.log(result);
  //     return result;
  //   } catch (error) {
  //     console.log("Something went wrong");
  //     console.log(error);
  //   }
  // }

  //Vendor Product array
  async getByIds(ids) {
    try {
      // Validate input
      if (!Array.isArray(ids) || ids.length === 0) {
        throw new Error("Invalid input: ids must be a non-empty array");
      }

      // Convert string IDs to MongoDB ObjectId instances
      const objectIds = ids.map(id => {
        if (!mongoose.Types.ObjectId.isValid(id)) {
          throw new Error(`Invalid ObjectId: ${id}`);
        }
        return new mongoose.Types.ObjectId(String(id));  // Ensure id is a string
      });

      // Query the database to find documents with the given ObjectIds
      const result = await this.model.find({ _id: { $in: objectIds } });

      // Return the found documents
      return result;
    } catch (error) {
      // Log an error message if something goes wrong
      console.log("Something went wrong");
      console.log(error);
      // Throw the error to be handled by the calling code
      throw error;
    }
  }


  //Delete Product from array
  async deletePA(id, pid) {
    try {
      console.log('deletePA ', id, pid)
      const vendor = await this.getById(id);
      if (!vendor) {
        throw new Error('Vendor not found');
      }
      const products = vendor.products;
      const index = products.indexOf(pid);
      if (index === -1) {
        throw new Error('Product not found in vendor\'s list');
      }
      products.splice(index, 1);
      await this.update(id, { products });
      console.log('product deleted from vendor array succesfully')
    }
    catch (e) {
      console.log('error while deleting product from vendor array');
    }
  }

  async getOrder(vid) {
    try {
      console.log('vid ', vid)
      const data = await this.model.find({ vendor: vid }).populate('order_id').populate({ path: 'products', populate: { path: 'id' } }).populate({
        path: 'order_id',
        populate: {
          path: 'customer'
        }
      });
      console.log('hiiiiiiii');
      return data;
    } catch (e) {
      console.log('error while getting the vendor orders', e);
    }
  }


  async getAllOrder() {
    try {
      const data = await this.model.find({}).populate('vendorproducts').populate({
        path: 'vendorproducts',
        populate: {
          path: 'vendor',
          model: 'Vendor'
        }
      }).populate({
        path: 'vendorproducts',
        populate: {
          path: 'products.id',
          model: 'Product'
        }
      }).populate('customer');
      console.log('data  ', data);
      return data;
    } catch (e) {
      console.log('error while getting the all orders to admin');
    }
  }

  async updateStat(vid, mid, pid,sid, newStatus) {
    try {
      // Convert the string IDs to ObjectId using 'new' keyword
      console.log(vid+" "+sid);
      // const vendorObjectId = new mongoose.Types.ObjectId(vid);
      // const orderObjectId = pid;
      // const productObjectId = new mongoose.Types.ObjectId(sid);

      // Find the VendorProducts document with the matching vendor, order, and product IDs
      const vendorProduct = await this.model.findOne({
        vendor: vid,
        id: pid,
        "products.id": sid,
      });
      // console.log('heyyyyyyyy',vendorProduct);
      // Check if the vendor product was found
      if (!vendorProduct) {
        throw new Error("Vendor product not found");
      }
      // console.log('in prodd ',vendorProduct,"  ",)
      // Find the specific product in the products array
      const product = vendorProduct.products.find(
        (product) => product.id.toString() === sid
      );

      // Check if the product was found
      if (!product) {
        throw new Error("Product not found in the vendor products");
      }

      // Update the status of the found product
      product.status = newStatus;

      // Save the updated document back to the database
      await vendorProduct.save();
      return "Success";
    } catch (error) {
      console.error("Error while updating the status of the product by vendor:", error);
      throw error; // Rethrow the error after logging it
    }
  }

}


module.exports = CrudRepository;