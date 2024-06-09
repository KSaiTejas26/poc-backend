const VendorRequest = require('../Models/VendorRequest');
const Vendor = require('../Models/Vendor');

const bcrypt=require('bcryptjs');
var jwt = require("jsonwebtoken");
const JWT_SECRET = "Realpage@123";

const createuser=async (req,res)=>{
    let success=false;
    
    
    
    try{
        let vendorrequest = await VendorRequest.findOne({ email: req.body.email });
        
        console.log("done");
      if (vendorrequest) {
        console.log(vendorrequest);
        return res
          .status(400)
          .json({ success,error: "Sorry a vendor with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      vendorrequest = await VendorRequest.create({
        vendor_first_name:req.body.vendor_first_name,
        vendor_last_name:req.body.vendor_last_name,
        email: req.body.email,
        phone_number:req.body.phone_number,
        business_name:req.body.business_name,
        gst_number:req.body.gst_number,
        business_registration_number:req.body.business_registration_number,
        company_website_url:req.body.company_website_url,
        password: secpass,
        country:req.body.country,
        street_address:req.body.street_address,
        city:req.body.city,
        state:req.body.state,
        zip_code:req.body.zip_code,
        categories_list:req.body.categories_list,
        bank_account_number:req.body.bank_account_number,
        bank_account_name:req.body.bank_account_name,
        ifsc_code:req.body.ifsc_code,
        account_holder_name:req.body.account_holder_name,
        expected_order_processing_time:req.body.expected_order_processing_time,
        average_shipping_time:req.body.average_shipping_time,
        vendor_image:req.body.vendor_image
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
        let vendor = await Vendor.findOne({ email });
        if (!vendor) {
          console.log("Vendor not found");
          return res
            .status(500)
            .json({success, error: error.message });
        }
        const passcomp = await bcrypt.compare(password, vendor.password);
        if (!passcomp) {
          console.log("Password not correct")
          return res
            .status(500)
            .json({success, error: "Incorrect password" });
        }
        const data = {
          vendor: {
            id: vendor.id,
          },
        };
        const auth_token = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success, auth_token: auth_token });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({success, error: error.message });
      }
    

}
module.exports={createuser,login};