const Repo = require('./crudrepository');
const Order = require('../Models/OrderTrackingMain');

class OrderTrackingMainRepo extends Repo
{
    constructor()
    {
        super(Order);
    }
}

module.exports = OrderTrackingMainRepo;