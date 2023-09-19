const express = require('express');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./connection');  // Updated line
const peopleRoutes = require('./routes/people.js');

const app = express();
app.use(bodyParser.json());
app.use('/people', peopleRoutes)

app.listen(8000);