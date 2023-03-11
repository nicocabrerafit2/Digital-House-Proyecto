module.exports = function (sequelize, dataTypes) {
  let alias = "carritos";
  let config = {
    tableName: "carritos",
    timestamps: false,
  };
  let colums = {
    carritoID: {
      type: dataTypes.INTEGER,
    },
  };

  const carrito = sequelize.define(alias, colums, config);

  return carrito;
};
