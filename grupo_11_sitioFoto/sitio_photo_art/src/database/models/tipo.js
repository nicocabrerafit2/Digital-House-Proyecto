const productos = require("./producto.js");

module.exports = function (sequelize, dataTypes) {
  let alias = "tipos";
  let config = {
    tableName: "tipos",
    timestamps: false,
  };
  let colums = {
    tipoDeProductoID: {
      primaryKey: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    tipoDeProducto: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
  };

  const tipo = sequelize.define(alias, colums, config);

  tipo.associate = function (models) {
    tipo.hasMany(models.productos, {
      foreignKey: "tipoDeProductoID",
      as: "productos",
    });
  };

  return tipo;
};
