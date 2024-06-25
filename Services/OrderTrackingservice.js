const Service = require('./service');
const OrderRepo = require('../Repository/OrderTracking');
const Schema = require('../Models/OrderTracking');
class OrderTrackingService extends Service
{
    constructor()
    {
        super(new OrderRepo());
        this.model=Schema;
    }
}

module.exports = OrderTrackingService;