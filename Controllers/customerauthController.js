const Customer = require('../Models/Customer');
const bcrypt=require('bcryptjs');
var jwt = require("jsonwebtoken");
const JWT_SECRET = "Realpage@123";

const createuser=async (req,res)=>{
    let success=false;
    
    
    
    try{
        let customer = await Customer.findOne({ email: req.body.email });
        
        console.log("done");
      if (customer) {
        console.log(customer);
        return res
          .status(400)
          .json({ success,error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      customer = await Customer.create({
        email: req.body.email,
        customer_first_name: req.body.customer_first_name,
        customer_last_name: req.body.customer_last_name,
        password: secpass,
        customer_image:req.body.customer_image
      });
      res.send("Done Successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send(success,error);
      }
}
const login = async (req,res)=>{
    let success=false;
    const { email, password } = req.body;
    console.log(password.toString());
    try {
        let customer = await Customer.findOne({ email });
        if (!customer) {
          console.log("User not found");
          return res
            .status(500)
            .json({success, error: error.message });
        }
        const passcomp = await bcrypt.compare(password, customer.password);
        if (!passcomp) {
          console.log("Password not correct")
          return res
            .status(500)
            .json({success, error: "Incorrect password" });
        }
        const data = {
          customer: {
            id: customer.id,
          },
        };
        const auth_token = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success, auth_token: auth_token,role:'customer' });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({success, error: error.message });
      }
    

}
module.exports={createuser,login};