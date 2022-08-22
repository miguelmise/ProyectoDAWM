const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelo', {
    idModelo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idMarca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marca',
        key: 'idMarca'
      }
    },
    nombreModelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tipoCombustible: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fechaModelo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modelo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idModelo" },
        ]
      },
      {
        name: "FK_Modelo_marca",
        using: "BTREE",
        fields: [
          { name: "idMarca" },
        ]
      },
    ]
  });
};
