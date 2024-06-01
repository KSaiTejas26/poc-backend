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
  }
  
  export default CrudRepository;