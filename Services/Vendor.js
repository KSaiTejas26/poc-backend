import Service from './service';
import VendorRepo from '../Repository/Vendor';
class VendorService extends Service
{
    constructor()
    {
        super(new VendorRepo());
        this.model='VendorSchema';
    }
}

module.exports = VendorService;