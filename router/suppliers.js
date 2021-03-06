let express =require('express');
let router = express.Router();

let models = require('../models');

router.get('/',(req, res)=>{
   models.Suppliers.findAll()
  .then(all => {
    res.render('suppliers',{suppliers:all});
  })
});
router.get('/add',(req, res)=>{
  res.render('suppliers_add');
});
router.post('/add',(req, res)=>{
  models.Suppliers.create(req.body)
  .then(add=>{
    res.redirect('/suppliers');
  })
});
router.get('/edit/:id',(req, res)=>{
  models.Suppliers.findOne({where:{id:req.params.id}})
  .then(edit=>{
    res.render('suppliers_edit',{suppliers:edit});
  })
});
router.post('/edit/:id',(req, res)=>{
  models.Suppliers.update(req.body,{where:{id:req.params.id}})
  .then(edit=>{
    res.redirect('/suppliers');
  })
});
router.get('/delete/:id',(req, res)=>{
  models.Suppliers.destroy({where:{id:req.params.id}})
  .then(del=>{
    res.redirect('/suppliers');
  })
});
module.exports = router;
