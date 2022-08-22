var DataTypes = require("sequelize").DataTypes;
var _marca = require("./marca");
var _modelo = require("./modelo");

function initModels(sequelize) {
  var marca = _marca(sequelize, DataTypes);
  var modelo = _modelo(sequelize, DataTypes);

  modelo.belongsTo(marca, { as: "idMarca_marca", foreignKey: "idMarca"});
  marca.hasMany(modelo, { as: "modelos", foreignKey: "idMarca"});

  return {
    marca,
    modelo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
