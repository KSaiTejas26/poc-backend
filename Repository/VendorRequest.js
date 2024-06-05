const Repo = require('./crudrepository');
const Vendor = require('../Models/VendorRequest');

class VendorRequestRepo extends Repo
{
    constructor()
    {
        super(Vendor);
    }
    
}

module.exports = VendorRequestRepo;