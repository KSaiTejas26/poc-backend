const Service = require('./service');
const ProductRepo = require('../Repository/Product');
class ProductService extends Service
{
    constructor()
    {
        super(new ProductRepo());
        this.model='ProductSchema';
    }
}

module.exports = ProductService;