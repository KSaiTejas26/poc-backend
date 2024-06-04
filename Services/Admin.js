const Service = require("./service");
const AdminRepo = require('../Repository/Admin');

class AdminService extends Service
{
    constructor()
    {
        super(new AdminRepo());
        this.model='AdminSchema';
    }
}

module.export = AdminService;