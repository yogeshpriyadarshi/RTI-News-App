const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('RTI News API running');
});

app.listen(process.env.PORT, () => {
  console.log('Server started at http://localhost:3000');
});



