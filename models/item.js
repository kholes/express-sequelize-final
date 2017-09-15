'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    codeitem: DataTypes.STRING
  },
  // {
  //   hooks: {
  //     beforeCreate: (codeItem) => {
  //       let codeNew = (codeItem).toUperCase();
  //       codeItem.codeitem = codeNew;
  //     }
  //   }
  // });
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Item;
};
