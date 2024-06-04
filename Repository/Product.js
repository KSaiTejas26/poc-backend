const Repo = require('./crudrepository');
const Product = require('../Models/Product');

class ProductRepo extends Repo
{
    constructor()
    {
        super(Product);
    }
}

module.exports = ProductRepo;