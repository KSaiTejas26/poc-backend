import Service from './service';
import ProductRepo from '../Repository/Product';
class ProductService extends Service
{
    constructor()
    {
        super(new ProductRepo());
        this.model='ProductSchema';
    }
}

module.exports = ProductService;