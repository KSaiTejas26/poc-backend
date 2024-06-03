const express = require('express')
const app = express()
const port = 3000
const connecttoMongo = require('./db');
const bodyParser = require('body-parser');
import apirouter from './Routes/index.js';
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',apirouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connecttoMongo();

}) 