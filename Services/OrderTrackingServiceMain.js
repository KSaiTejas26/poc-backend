const Service = require('./service');
const OrderRepo = require('../Repository/OrderTrackingMain');
const Schema = require('../Models/OrderTrackingMain');
class OrderTrackingMainService extends Service
{
    constructor()
    {
        super(new OrderRepo());
        this.model=Schema;
    }
}

module.exports = OrderTrackingMainService;