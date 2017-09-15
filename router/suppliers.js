let express =require('express');
let router = express.Router();

let models = require('../models');

router.get('/',(req, res)=>{
   models.Suppliers.findAll()
      .then(allBarangs => {
       //res.send({students:allStudents});
      res.render('barangs',{barangs:allBarangs,role:req.session.login.role});
    })

});

module.exports = router;
