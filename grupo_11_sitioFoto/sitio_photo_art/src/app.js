const express = require("express");

const app = express();

const path = require("path");

const cookieParser = require('cookie-parser')

const methodOverride = require("method-override");

const session = require("express-session");

const recuerdameMiddleware = require("./middlewares/recuerdameMiddleware")

const cors = require("cors");

// **** Middlewares  ****
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public"))); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "Son las session",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(recuerdameMiddleware);

// **** Template Engine - (don't touch) ****
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vistas

// **** Route System require and use() ****
const mainRouter = require("./routes/main"); // Rutas main
const productsRouter = require("./routes/products"); // Rutas /products
const usersRouter = require("./routes/users"); //Rutas users
const apiUserRouter = require("./routes/routesApi/usersApi");
const apiProductRouter = require("./routes/routesApi/productsApi");

app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/apiProduct", apiProductRouter);
app.use("/apiUser", apiUserRouter);

const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
  console.log("Servidor funcionando en puerto", 3001);
});
