var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('view engine', 'ejs');
var index = require('./router/index.js');
var suppliers = require('./router/suppliers.js');
app.use('/', index);
app.use('/', suppliers);
app.listen(process.env.PORT||3000,()=>{
  console.log('Listening Port 3000')
});

// var path = require('path');
// var path = require('path');
// app.use('/users', user);
// app.use('/transaksis', transaksi);
// app.use('/barangs', barang);
// app.use('/reports', report);
// var path = require('path')
// app.use('/static',express.static(__dirname + '/public'));
// var session = require('express-session');
// var md5 = require('md5');
// var utility = require('./helper/util.js');
// var login = require('./router/login.js');
// var user = require('./router/users.js');
// var transaksi = require('./router/transaksis.js');
// var barang = require('./router/barangs.js');
// var report = require('./router/reports.js');
// var signup = require('./router/signup.js');
// app.use('/signup', signup);
// app.use(session({
//   secret:'secret',
//   cookies:{}
// }))
// app.use('/login', login);
// app.use('/',(req,res,next)=>{
//   if(req.session.login){
//     next()
//   }else{
//     res.redirect('/login');
//   }
// })
// app.get('/logout', function (req, res) {
//   req.session.destroy();
//   res.redirect('/');
// });
