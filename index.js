const express = require('express')
const app = express()
const port = 3000
const connecttoMongo = require('./db');
const bodyParser = require('body-parser');
const apirouter = require('./Routes/index.js');
const Category=require('./Routes/Category.js');
const Customerauth=require('./Routes/Customerauth');
const Adminauth=require('./Routes/Adminauth');
const Vendorauth=require('./Routes/Vendorauth');
const Product=require('./Routes/ProductRoute');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth/customer',Customerauth);
app.use('/api/auth/admin',Adminauth);
app.use('/api/auth/vendor',Vendorauth);


app.use('/api',apirouter);
app.use('/api/category',Category);

app.use('/api/customer',Category);
app.use('/api/product',Product);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connecttoMongo();

}) 