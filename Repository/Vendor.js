const Repo = require('./crudrepository');
const Vendor = require('../Models/Vendor').Vendor;

class VendorRepo extends Repo
{
    constructor()
    {
        super(Vendor);
    }
}

module.exports = VendorRepo;