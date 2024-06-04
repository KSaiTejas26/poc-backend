const Repo = require('./crudrepository');
const Product = require('../Models/Product').product;

class ProductRepo extends Repo
{
    constructor()
    {
        super(Product);
    }
}

module.exports = ProductRepo;