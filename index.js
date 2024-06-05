const express = require('express')
const app = express()
const port = 3000
const connecttoMongo=require('./db');
const Customerauth=require('./Routes/Customerauth');
const Category=require('./Routes/Category');
const cors=require('cors');
const bodyParser = require('body-parser')
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth/',Customerauth);
app.use('/api/customer',Category);
app.use(cors());


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connecttoMongo();

})