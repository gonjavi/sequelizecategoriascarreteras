const express = require('express');
let app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const routes = require('./routes');

app.use('/api', routes);

app.listen(3000, function () {
  console.log('Server is running in port 3000');
});