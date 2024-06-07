
class Service {
    // repository=""
    constructor(repository) {
      this.repository = repository;
      this.model = 'model';
    }
  
    async create(body) {
      console.log('body','hiiii')
      const data = await this.repository.create(body);
      if (!data) {
        throw new Error('Not created');
      }
      return data;
    }
  
    async findAll() {
      console.log('in find all',this.repository);
      const data = await this.repository.getAll();
      if (!data) {
        throw new Error('Internal server error');
      }
      return data;
    }
  
    async findOne(options) {
      const data = await this.repository.getById(options);
      if (!data) {
        throw new Error('Not found');
      }
      return data;
    }
  
    async update(id, body) {

      const data = await this.findOne(id);
      if (!data) {
        throw new Error('Not found');
      }
      
      console.log('in payload ',body);
      await this.repository.update(id, body);
      return body;
    }
  
    async remove(id) {
      console.log(id);
      const data = await this.repository.getById(id);
      if (!data) {
        throw new Error('Not found');
      }
      const deldata = await this.repository.delete(id);
      return deldata;
    }
  
    //Vendor product array
    async findMany(ids) {
      const data = await this.repository.getByIds(ids);
      // const data = await this.repository.getByIds(ids);
      if (!data) {
        throw new Error('Not found');
      }
      return data;
    }
  
    async removeFromArray(id, pid) {
      // console.log(id," ",pid);
      const data = await this.repository.deletePA(id, pid);
      // if (!data) {
      //   throw new Error('Not found');
      // }
      return data;
    }
  
    async addtoArray(pid, vid) {
      const data = await this.findOne(vid);
      if (!data) {
        throw new Error('Not found');
      }
      // data.products = data.products || [];
      data.products.push(pid);
      await this.update(vid, data);
      return data;
    }
  }
  
  module.exports = Service;