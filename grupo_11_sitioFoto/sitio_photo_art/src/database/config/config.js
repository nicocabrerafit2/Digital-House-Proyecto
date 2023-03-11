module.exports = {
  //para MACOS
  /*development: {
    username: "root",
    password: "root",
    database: "sitiofotodb",
    host: "127.0.0.1",
    dialect: "mysql",
    port: "8889",
  },*/
  //para Windows
  development: {
    password: null,
    username: "root",
    database: "sitiofotodb",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
