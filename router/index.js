let express =require('express');
let router = express.Router();
let models = require('../models');

router.get('/',(req,res)=>{
  res.render('index');
})
module.exports = router;
