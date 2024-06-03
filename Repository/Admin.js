import Repo from './crudrepository';
const Admin = require('../Models/Admin').Admin;

class AdminRepo extends Repo
{
    constructor()
    {
        super(Admin);
    }
}

module.export = AdminRepo;