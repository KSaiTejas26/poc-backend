const Service = require('./service');
const VendorRequestRepo = require('../Repository/VendorRequest');
class VendorRequestService extends Service
{
    constructor()
    {
        super(new VendorRequestRepo());
        this.model='VendorSchema';
    }
}

module.exports = VendorRequestService;