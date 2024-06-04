const Repo = require('./crudrepository');
const Vendor = require('../Models/Vendor');

class VendorRepo extends Repo
{
    constructor()
    {
        super(Vendor);
    }
}

module.exports = VendorRepo;