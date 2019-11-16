const express = require('express');
const app = express();
const PORT = 4000;
const os = require('os');
const { name, summ } = require('./name');
const qwe = require('./name');

const bodyParser =  require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

const routes = require('./routes');
const auth = require('./auth')

app.use(routes);
app.use(auth);

app.listen(PORT, () => {
  console.log("Server working"); 
})



