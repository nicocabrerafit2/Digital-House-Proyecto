const tamanos = require("./tamano.js");
const tipos = require("./tipo.js");

module.exports = function (sequelize, dataTypes) {
  let alias = "productos";
  let config = {
    tableName: "productos",
    timestamps: false,
  };
  let colums = {
    productoID: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    nombre: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },

    descripcion: {
      type: dataTypes.TEXT,
      allowNull: false,
    },

    precio: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    tipoDeProductoID: {
      type: dataTypes.INTEGER,
    },

    tamanoDeProductoID: {
      type: dataTypes.INTEGER,
    },

    fotoProducto: {
      type: dataTypes.STRING(100),
    },
  };
  const producto = sequelize.define(alias, colums, config);

  producto.associate = function (models) {
    producto.belongsTo(models.tamanos, {
      as: "tamanoDeProducto",
      foreignKey: "tamanoDeProductoID",
    }),
      producto.belongsTo(models.tipos, {
        as: "tipoDeProducto",
        foreignKey: "tipoDeProductoID",
      });
  };

  return producto;
};
