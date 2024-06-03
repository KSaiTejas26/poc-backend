import Repo from './crudrepository';
const Vendor = require('../Models/Vendor').Vendor;

class VendorRepo extends Repo
{
    constructor()
    {
        super(Vendor);
    }
}

module.export = VendorRepo;