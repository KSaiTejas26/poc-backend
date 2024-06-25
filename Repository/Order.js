const Repo = require('./crudrepository');
const Order = require('../Models/OrderTrackingMain');

class OrderRepo extends Repo
{
    constructor()
    {
        super(Order);
    }
}

module.exports = OrderRepo;