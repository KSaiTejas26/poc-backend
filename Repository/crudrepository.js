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
        const result = await this.model.findById(id);
        return result;
      } catch (error) {
        console.log("Something went wrong");
        console.log(error);
      }
    }
  
    async getAll() {
      try {
        const result = await this.model.find({});
        return result;
      } catch (error) {
        console.log("Something went wrong");
        console.log(error);
      }
    }
  
    async update(id, data) {
      try {
        const result = await this.model.findByIdAndUpdate(id, data, {
          new: true,
        });
        return result;
      } catch (error) {
        console.log("Something went wrong");
        console.log(error);
      }
    }

    //Vendor Product array
    async getByIds(ids) {
      try {
        const result = await this.model.find({ _id: { $in: ids } });
        return result;
      } catch (error) {
        console.log("Something went wrong");
        console.log(error);
      }
    }

    //Delete Product from array
    async deletePA(id,pid)
    {
      try
      {
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
      catch(e)
      {
        console.log('error while deleting product from vendor array');
      }
    }

  }
  
  module.exports=CrudRepository;