const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const HealthRouter = require('./routes/health');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection
const uri = process.env.ATLAS_URI
try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected"),
    );
  } catch (e) {
    console.log("could not connect");
  }

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection is established');
});

app.use('/health', HealthRouter);

app.listen(port, () => {
    console.log(`Server is running in port : ${port}`);
});
