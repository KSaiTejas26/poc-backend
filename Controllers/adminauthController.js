const Admin = require('../Models/Admin');
const bcrypt=require('bcryptjs');
var jwt = require("jsonwebtoken");
const JWT_SECRET = "Realpage@123";


const login = async (req,res)=>{
    let success=false;
    const { email, password } = req.body;
    console.log(req.body);
    try {
        let admin = await Admin.findOne({ email });
        if (!Admin) {
          console.log("Admin not found");
          return res
            .status(500)
            .json({success, error: error.message });
        }
        const passcomp = await bcrypt.compare(password, admin.password);
        if (!passcomp) {
          console.log("Password not correct")
          return res
            .status(500)
            .json({success, error: "Incorrect password" });
        }
        const data = {
          Admin: {
            id: Admin.id,
          },
        };
        const auth_token = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success, auth_token: auth_token,role:'admin' });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({success, error: error.message });
      }
    

}
module.exports={login};