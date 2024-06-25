const Repo = require('./crudrepository');
const Order = require('../Models/OrderTracking');

class OrderTrackingRepo extends Repo
{
    constructor()
    {
        super(Order);
    }
}

module.exports = OrderTrackingRepo;