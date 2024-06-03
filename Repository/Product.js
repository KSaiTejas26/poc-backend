import Repo from './crudrepository';
const Product = require('../Models/Product').product;

class ProductRepo extends Repo
{
    constructor()
    {
        super(Product);
    }
}

module.export = ProductRepo;