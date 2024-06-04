const Repo = require('./crudrepository');
const Admin = require('../Models/Admin').Admin;

class AdminRepo extends Repo
{
    constructor()
    {
        super(Admin);
    }
}

module.exports = AdminRepo;