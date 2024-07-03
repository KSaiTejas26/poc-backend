const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000
app.use(cors());
app.use(bodyParser.json())
const connecttoMongo = require('./db');
const addData = require('./controllers/formController');
const getCritics = require('./controllers/CriticsController');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addform', addData);
app.get('/getCritics/:pid', getCritics.getCritics);
app.get('/onlydata', getCritics.getOnlyNameCritics);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connecttoMongo();
})