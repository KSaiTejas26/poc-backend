const express = require('express')
const app = express()
const port = 3000
const connecttoMongo = require('./db');
const bodyParser = require('body-parser');
const apirouter = require('./Routes/index.js');
const Category=require('./Routes/Category.js');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',apirouter);
app.use('/api/category',Category);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connecttoMongo();

}) 