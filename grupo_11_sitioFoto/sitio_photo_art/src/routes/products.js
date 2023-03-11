// **** Require's ****
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
// **** Controller Require ****
const productsController = require("../controllers/productsController");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../sitio_photo_art/public/images/imgP");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const validacionesRegistro = [
  body("nombre")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Debe introducir nombre de al menos 5 caracteres"),
  body("descripcion")
    .notEmpty()
    .isLength({ min: 20 })
    .withMessage("Debe introducir descripción de al menos 20 caracteres"),
  body("precio").notEmpty().withMessage("Debe introducir precio"),
  body("tipoDeProducto")
    .notEmpty()
    .withMessage("Debe introducir tipo del producto"),
  body("fotoProducto").custom(async (value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".jpeg"];

    if (!file) {
      throw new Error(
        "Tienes que subir una imagen en alguno de estos formatos jpg-png-jpeg"
      );
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    fileLocal = file;
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});
 
/* GET ALL PRODUCTS */
router.get("/", productsController.index);

/* CREATE ONE PRODUCT */
router.get("/productAdd", productsController.productAdd);
router.post(
  "/",
  upload.single("imagen"),
  validacionesRegistro,
  productsController.store
);

/* GET ONE PRODUCT DETAIL */
router.get("/detail/:productoID", productsController.detail);

/* EDIT ONE PRODUCT */
router.get("/edit/:productoID", productsController.edit);
router.put(
  "/edit/:productoID",
  upload.single("imagen"),
  validacionesRegistro,
  productsController.update
);

router.get("/productsList", productsController.list);

/* DELETE ONE PRODUCT***/
router.post("/delete/:productoID", productsController.delete);

module.exports = router;
