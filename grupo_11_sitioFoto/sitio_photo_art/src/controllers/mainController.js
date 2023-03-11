const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models");

const visited = products.filter(function (product) {
  return product.category == "visited";
});
const inSale = products.filter(function (product) {
  return product.category == "in-sale";
});
const controller = {
  home: (req, res) => {
    res.render("home", {
      user: req.session.userLogged,
      visited,
      products,
      inSale,
      toThousand,
    });
  },
  Carrito: (req, res) => {
    res.render("carrito", {
      user: req.session.userLogged,
    });
  },

  soporte: (req, res) => {
    let VARRUTA = "./ SOPORTE";
    res.render("enconstruccion", { user: req.session.userLogged, VARRUTA });
  },

  enmarcados: (req, res) => {
    let VARRUTA = "./ ENMARCADOS";
    res.render("enmarcados", { user: req.session.userLogged, VARRUTA });
  },

  prints: (req, res) => {
    let VARRUTA = "./ PRINTS";
    res.render("prints", { user: req.session.userLogged, VARRUTA });
  },

  buscar: (req, res) => {
    let VARRUTA = "./ BUSCADOR";
    res.render("enconstruccion", { user: req.session.userLogged, VARRUTA });
  },
};

module.exports = controller;
