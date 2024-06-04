const Service = require('./service');
const VendorRepo = require('../Repository/Vendor');
const Schema = require('../Models/Vendor');
class VendorService extends Service
{
    constructor()
    {
        super(new VendorRepo());
        this.model=Schema;
    }
}

module.exports = VendorService;