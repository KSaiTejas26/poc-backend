const Service = require('./service');
const ProductRepo = require('../Repository/Product');
const Schema = require('../Models/Product');
class ProductService extends Service
{
    constructor()
    {
        super(new ProductRepo());
        this.model=Schema;
    }
}

module.exports = ProductService;