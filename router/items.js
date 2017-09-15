let express =require('express');
let router = express.Router();

let models = require('../models');

router.get('/',(req, res)=>{
   models.Item.findAll()
  .then(all => {
    res.render('items',{items:all});
  })
});
router.get('/add',(req, res)=>{
  res.render('items_add');
});
router.post('/add',(req, res)=>{
  models.Item.create(req.body)
  .then(add=>{
    res.redirect('/items');
  })
});
router.get('/edit/:id',(req, res)=>{
  models.Item.findOne({where:{id:req.params.id}})
  .then(edit=>{
    res.render('items_edit',{items:edit});
  })
});
router.post('/edit/:id',(req, res)=>{
  models.Item.update(req.body,{where:{id:req.params.id}})
  .then(edit=>{
    res.redirect('/items');
  })
});
router.get('/delete/:id',(req, res)=>{
  models.Item.destroy({where:{id:req.params.id}})
  .then(del=>{
    res.redirect('/items');
  })
});
module.exports = router;
