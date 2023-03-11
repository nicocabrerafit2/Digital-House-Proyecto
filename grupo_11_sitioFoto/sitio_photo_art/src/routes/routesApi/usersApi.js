const express = require("express");
const router = express.Router();
const userControllerApi = require("../../controllers/controllersApi/userControllerApi");

router.get("/apiList", userControllerApi.list);

router.get("/apiList/:usuarioID", userControllerApi.detail);

module.exports = router;