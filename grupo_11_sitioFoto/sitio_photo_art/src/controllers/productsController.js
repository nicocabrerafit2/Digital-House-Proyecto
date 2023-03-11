const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db = require("../database/models");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render("Producto", {
      products,
      user: req.session.userLogged,
      toThousand,
    });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    db.productos.findByPk(req.params.productoID).then(function (data) {
      let productos = data.dataValues;
      res.render("productDetail", { productos,  user: req.session.userLogged });
    });
  },

  list: function (req, res) {
    res.render("productsList", {
      products: products,
      users: users,
      user: req.session.userLogged,
    });
  },

  // Create - Form to create
  productAdd: (req, res) => {
    res.render("productAdd", {
      user: req.session.userLogged,
    });
  },

  // Create -  Method to store

  store: (req, res) => {
    let errores = validationResult(req);
    if (errores.isEmpty()) {
      let fotoProducto;
      if (req.file != undefined) {
        fotoProducto = req.file.filename;
      } else {
        fotoProducto = "default.png";
      }

      if (products.length != 0) {
        let newProduct = {
          productoID: products[products.length - 1].productoID + 1,
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          tipoDeProductoID: req.body.tipoDeProducto,
          tamanoDeProductoID: req.body.tamanoDeProducto,
          precio: req.body.precio,
          fotoProducto,
        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        db.productos
          .create(newProduct)
          .then((storedProduct) => {
            return res.redirect("/products/productsList");
          })
          .catch((error) => console.log(error));
      } else {
        let newProduct = {
          productoID: 1,
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          tipoDeProductoID: req.body.tipoDeProducto,
          tamanoDeProductoID: req.body.tamanoDeProducto,
          precio: req.body.precio,
          fotoProducto,
        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        db.productos
          .create(newProduct)
          .then((storedProduct) => {
            return res.redirect("/");
          })
          .catch((error) => console.log(error));
      }
    } else {
      res.render("productAdd", {
        errores: errores.array(),
        user: req.session.userLogged,
      });
    }
  },

  // Update - Form to edit
  edit: (req, res) => {
    db.productos.findByPk(req.params.productoID).then(function (data) {
      let productos = data.dataValues;
      res.render("product-edit-form", { productos, user: req.session.userLogged });
    });
  },

  // Update - Method to update
  update: (req, res) => {
    let errores = validationResult(req);
    console.log(req.body.nombre)
    if (errores.isEmpty()) {
      let fotoProducto;
      if (req.file != undefined) {
        fotoProducto = req.file.filename;
      } else {
        fotoProducto = "default.png";
      }
      for (let i = 0; i < products.length; i++) {
        if (products[i].productoID == req.params.productoID) {
          products[i].nombre = req.body.nombre;
          products[i].descripcion = req.body.descripcion;
          products[i].tipoDeProductoID = req.body.tipoDeProductoID;
          products[i].tamanoDeProductoID = req.body.tamanoDeProductoID;
          products[i].precio = req.body.precio;
          products[i].fotoProducto = req.file.filename;
        }
      }

      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

      db.productos.update(
        {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          tipoDeProductoID: req.body.tipoDeProductoID,
          tamanoDeProductoID: req.body.tamanoDeProductoID,
          precio: req.body.precio,
          fotoProducto,
        },
        {
          where: { productoID: req.params.productoID },
        }
      );
      res.redirect("/products/productsList");
    } else {
      console.log(errores)
      res.render("product-edit-form", {
        errores: errores.array(),
        productos: req.body, 
        user: req.session.userLogged,
      });
    }
  },

  // Delete - Delete one product from DB
  delete: (req, res) => {
    db.productos.destroy({
      where: { productoID: req.params.productoID },
    });

    let productoID = req.params.productoID;
    let finalProducts = products.filter(
      (product) => product.productoID != productoID
    );
    fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, 2));
    res.redirect("../productsList");
  },
};

module.exports = controller;
