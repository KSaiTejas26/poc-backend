const Service = require('./service');
const VendorRequestRepo = require('../Repository/VendorRequest');
const Schema = require('../Models/VendorRequest');
class VendorRequestService extends Service
{
    constructor()
    {
        super(new VendorRequestRepo());
        this.model=Schema;
    }
}

module.exports = VendorRequestService;