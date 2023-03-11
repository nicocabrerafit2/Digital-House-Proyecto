const express = require("express");
const router = express.Router();
const productsControllerApi = require("../../controllers/controllersApi/productsControllerApi");

router.get("/apiList", productsControllerApi.list);

router.get("/apiList/:productoID", productsControllerApi.detail);

module.exports = router;