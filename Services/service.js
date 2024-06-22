
class Service {
    // repository=""
    constructor(repository) {
      this.repository = repository;
      this.model = 'model';
    }
  
    async create(body) {
      console.log('body','hiiii')
      console.log(body);
      const data = await this.repository.create(body);
      if (!data) {
        return ('Not created');
      }
      return data;
    }
  
    async findAll() {
      console.log('in find all',this.repository);
      const data = await this.repository.getAll();
      if (!data) {
        return ('Internal server error');
      }
      return data;
    }
  
    async findOne(options) {
      const data = await this.repository.getById(options);
      if (!data) {
        return 'Not Found';
      }
      return data;
    }
  
    async update(id, body) {

      const data = await this.findOne(id);
      if (!data) {
        return 'Not Found';
      }
      
      console.log('in payload ',body);
      await this.repository.update(id, body);
      return body;
    }
  
    async remove(id) {
      console.log(id);
      const data = await this.repository.getById(id);
      if (!data) {
        return 'Not Found';
      }
      const deldata = await this.repository.delete(id);
      return deldata;
    }
  
    //Vendor product array
    async findMany(ids) {
      const data = await this.repository.getByIds(ids);
      // const data = await this.repository.getByIds(ids);
      if (!data) {
        return 'Not Found';
      }
      return data;
    }
  
    async removeFromArray(id, pid) {
      // console.log(id," ",pid);
      const data = await this.repository.deletePA(id, pid);
      // if (!data) {
      //   return 'Not Found';
      // }
      return data;
    }
  
    async addtoArray(vid, pid) {
      const data = await this.findOne(vid);
      if (!data) {
        return 'Not Found';
      }
      // data.products = data.products || [];
      console.log('in services data ',data);
      data.products.push(pid);
      await this.update(vid, data);
      return data;
    }

    async getOrders(vid)
    {
      const data = await this.repository.getOrder(vid);
      if(!data)
      {
        return ('not found')
      }
      return data;
    }


    async getAllOrders()
    {
      const data = await this.repository.getAllOrder();
      if(!data)
      {
        return ('not found')
      }
      return data;
    }
  }
  
  module.exports = Service;