module.exports = function (sequelize, dataTypes) {
  let alias = "carritoProductos";
  let config = {
    tableName: "carritoProductos",
    timestamps: false,
  };
  let colums = {
    carritoProductoID: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
    },
    productoID: {
      type: dataTypes.INTEGER,
    },
    carritoID: {
      type: dataTypes.INTEGER,
    },
  };

  const carritoProducto = sequelize.define(alias, colums, config);

  // carritoProducto.associate = function (models) {
  //   carritoProducto.hasMany(models.usuarios, {
  //   as: "usuarios",
  //   foreignKey: "carritoID",
  // });};
  

  return carritoProducto;
};
 