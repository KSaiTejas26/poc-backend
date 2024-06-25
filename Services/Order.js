const Service = require('./service');
const OrderRepo = require('../Repository/Order');
const Schema = require('../Models/OrderTrackingMain');
class OrderService extends Service
{
    constructor()
    {
        super(new OrderRepo());
        this.model=Schema;
    }
}

module.exports = OrderService;