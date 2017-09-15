'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    codeitem: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  /*
  codeitem: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          length: function (value,next){

          }
        }
      }
},
{
  hooks: {
    beforeCreate: function (value,next){
      // console.log(value)
      let pesan='';
      if(value.codeitem.length !== 6){
        pesan+='Code Item harus diisi dengan 6 karakter';
        return next(pesan)
      }else{
        pesan+='OK'
        return next(pesan);
        // let codeNew = (/(HP|SW|LP)\d+/);
        // value.codeitem = codeNew;
      }
    }
  }
  */
  return Item;
};
