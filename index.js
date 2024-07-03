const getData=require('./controllers/getDataController')
const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000
app.use(cors());
app.use(bodyParser.json())
const connecttoMongo = require('./db');
const addData=require('./controllers/formController');
const CoronaSchema = require('./models/data')
const getCritics=require('./controllers/CriticsController');
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/getdata',getData);
app.post('/addform',addData);
app.get('/getCritics',getCritics);

app.post('/api/adddata', async (req, res) => {
  try {
      console.log('data ',req.body);
      const response = await CoronaSchema.findOne({ Month: req.body.Month });
      console.log(response);
      if (response) {
          response.NumberOfRecovered += (Number(req.body.NumberOfRecovered )|| 0);
          response.NumberOfDeaths += (Number(req.body.NumberOfDeaths )|| 0);
          response.NumberOfNewCases += (Number(req.body.NumberOfNewCases )|| 0);
          await response.save();
          res.status(200).send('Data updated successfully');
      } else {
          const result = await CoronaSchema.create(req.body);
          res.status(200).send('Added succesfully');
      }
  } catch (e) {
      console.log(e);
      res.status(404).send('error while posting the input data');
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connecttoMongo();
})