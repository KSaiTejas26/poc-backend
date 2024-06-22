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
      console.log(vid);
      const data = await this.model.find({}).populate({
        path: 'productDescription',
        populate: {
          path: 'cid',
          model: 'Customer'
        }
      });
      console.log(data);
      const newData = data.map((order) => {
        const filteredDescriptions = order.productDescription.filter(pd => pd.vid.equals(vid));
        return {
          ...order.toObject(),
          productDescription: filteredDescriptions
        };
      });
      newData.map((data) => {
        console.log('in loop ', data);
      })
      console.log('in new data', newData[0].productDescription[0]);
      return newData;
    } catch (e) {
      console.log('error while getting the vendor order details', e);
      throw e;
    }
  }





  async getAllOrder() {
    try {
      console.log('in allll')
      const data = await this.model.find({}).populate("productDescription.vid").populate("productDescription.pid").populate("cid");
      console.log(data[0].productDescription);
      return data;
    } catch (e) {
      console.log('error while getting the vendor order details', e);
      throw e;
    }
  }

}

module.exports = CrudRepository;