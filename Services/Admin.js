const Service = require("./service");
const AdminRepo = require('../Repository/Admin');
const Schema = require('../Models/Admin');
class AdminService extends Service
{
    constructor()
    {
        super(new AdminRepo());
        this.model=Schema;
    }
}

module.exports = AdminService;