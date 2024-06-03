import Service from "./service";
import AdminRepo from '../Repository/Admin';

class AdminService extends Service
{
    constructor()
    {
        super(new AdminRepo());
        this.model='AdminSchema';
    }
}

module.export = AdminService;