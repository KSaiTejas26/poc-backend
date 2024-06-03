import Service from './service';
import VendorRequestRepo from '../Repository/VendorRequest';
class VendorRequestService extends Service
{
    constructor()
    {
        super(new VendorRequestRepo());
        this.model='VendorSchema';
    }
}

module.exports = VendorRequestService;