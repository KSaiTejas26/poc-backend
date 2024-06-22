const Repo = require('./crudrepository');
const Order = require('../Models/Order');

class OrderRepo extends Repo
{
    constructor()
    {
        super(Order);
    }
}

module.exports = OrderRepo;