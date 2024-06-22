const Service = require('./service');
const OrderRepo = require('../Repository/Order');
const Schema = require('../Models/Order');
class OrderService extends Service
{
    constructor()
    {
        super(new OrderRepo());
        this.model=Schema;
    }
}

module.exports = OrderService;