const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;

const tamanos = db.tamanos;
const tipos = db.tipos;
const productos = db.productos;

const productsControllerApi = {
  list: async (req, res) => {
    try {
      let productsApi = await productos.findAll({
        include: ["tipoDeProducto", "tamanoDeProducto"],
        attributes: [
          "nombre",
          "descripcion",
          "precio",
          "productoID",
          "fotoProducto",
        ],
      });
      var products = productsApi.map((product) => {
        return {
          ...product.dataValues,
          urlDetail: `http://localhost:3001/apiProduct/apiList/${product.productoID}`,
          image: `http://localhost:3001/images/imgP/${product.fotoProducto}`,
        };
      });

      res.json({
        meta: {
          status: 200,
          count: products.length,
        },
        data: {
          products,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },

  detail: (req, res) => {
    productos
      .findByPk(req.params.productoID, {
        include: [
          { association: "tipoDeProducto" },
          { association: "tamanoDeProducto" },
        ],
      })
      .then((product) => {
        //console.log(product)
        //console.log(product?.data?.id )
        //console.log(req.params.id)
        console.log(product.dataValues);

        if (
          product?.dataValues?.productoID !== null &&
          product?.dataValues?.productoID == req.params.productoID
        ) {
          let respuesta = {
            meta: {
              status: 200,
              total: product.length,
              url: "/apiProduct/apiList/:productoID",
            },
            data: {
              productoID: product.dataValues.productoID,
              Nombre: product.dataValues.nombre,
              Descripcion: product.dataValues.descripcion,
              Tipo: product.dataValues.tipoDeProducto,
              Precio: product.dataValues.precio,
              Tamano: product.dataValues.tamanoDeProducto,
              Imagen: `http://localhost:3001/images/imgP/${product.dataValues.fotoProducto}`,
            },
          };
          return res.json(respuesta);
        }
        return res.status(200).json("No existe el producto");
      });
  },
};

module.exports = productsControllerApi;
