var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('view engine', 'ejs');
var index = require('./router/index.js');
var suppliers = require('./router/suppliers.js');
var items = require('./router/items.js');
app.use('/', index);
app.use('/suppliers', suppliers);
app.use('/items', items);
app.listen(process.env.PORT||3000,()=>{
  console.log('Listening Port 3000')
});
