const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');

const config = require('./config/config') 
router = require('./routes')

const app = express();

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())

router(app)

mongoose
  .connect(
    "mongodb+srv://Hassen:Hassen_471@bets.mvnca.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    app.listen(config.port, () => console.log("server on " + config.port));
  })
  .catch((err) => {
    console.log(err);
  });
