const Service = require('./service');
const VendorRepo = require('../Repository/Vendor');
class VendorService extends Service
{
    constructor()
    {
        super(new VendorRepo());
        this.model='VendorSchema';
    }
}

module.exports = VendorService;