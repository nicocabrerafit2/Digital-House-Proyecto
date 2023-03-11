const productos = require("./producto.js");

module.exports = function (sequelize, dataTypes) {
  let alias = "tamanos";
  let config = {
    tableName: "tamanos",
    timestamps: false,
  };
  let colums = {
    tamanoDeProductoID: {
      primaryKey: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    tamanoDeProducto: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
  };

  const tamano = sequelize.define(alias, colums, config);

  tamano.associate = function (models) {
    tamano.hasMany(models.productos, {
      foreignKey: "tamanoDeProductoID",
      as: "productos",
    });
  };

  return tamano;
};
