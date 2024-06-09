const jwt = require("jsonwebtoken");
const JWT_SECRET = "Realpage@123";

const fetchCustomer = (req, res, next) => {
    const token = req.header('auth_token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.customer = data.customer;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

module.exports = fetchCustomer;