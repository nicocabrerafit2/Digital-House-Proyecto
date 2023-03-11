// **** Require's ****
const express = require("express");
const router = express.Router();

// **** Controller Require ****
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);

router.get("/carrito", mainController.Carrito);

router.get("/soporte", mainController.soporte);

router.get("/Enmarcados", mainController.enmarcados);

router.get("/Prints", mainController.prints);

router.get("/buscar", mainController.buscar);

module.exports = router;
