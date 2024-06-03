class Service
{
    constructor(repo)
    {
        this.repo=repo;
        this.model='model';
    }

    async create (body) {
        const data = await this.repository.create(body);  
        if (!data) {
          throw new Error('Not created');
        }
        return data;
    }

    async findAll () {
        const data = await this.repository.getAll();
        if (!data) {
            throw new Error('Internal server error');
        }
        return data;
    }
    
    async findOne (options) {
        const data = await this.repository.getById(options);
        if (!data) {
            throw new Error('Not found');
        }
        return data;
    }
    
    async findByPk (id) {
        const data = await this.repository.findByPk(id)

        if (!data) {
            throw new Error('Not found')
        }

        return data
    }

    async update (id, body) {
        const data = await this.findOne(id)
        if (!data) {
            throw new Error('Not found')
        }
        const payload = {
            ...data.dataValues,
            ...body
        }
        await this.repository.update(id, payload)
        return payload
    }
    
    async remove (id) {
        const data = await this.repository.getById(id);
        if (!data) {
            throw new Error('Not found');
        }
        await this.repository.remove(id);
        return null;
    }

    //Vendor product array
    async findMany(ids) {
        const data = await this.repo.getByIds({ _id: { $in: ids } });
        if (!data) {
          throw new Error('Not found');
        }
        return data;
    }

    async removeFromArray(id,pid) {
        const data = await this.repo.deletePA(id,pid);
        if (!data) {
          throw new Error('Not found');
        }
        return data;
      }

    async addtoArray(id, vid) {
        const data = await this.findOne(vid);
        if (!data) {
          throw new Error('Not found');
        }
        // data.products = data.products || [];
        data.product.push(id);
        await this.update(vid, data);
        return data;
      }
}

module.exports = Service;

