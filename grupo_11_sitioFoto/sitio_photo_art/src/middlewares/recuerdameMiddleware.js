function recuerdameMiddleware(req, res, next) {

    next();

    if (req.body.recuerdame != undefined && req.session.userLogged == undefined){
        let usersFilePath = path.join(__dirname, "../data/users.json");
        let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        let errores = validationResult(req);
        if (errores.isEmpty()) {
            let usuarioALogearse
          for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.cookies.recuerdame) {
            usuarioALogearse = users[i];
            }
          }
          req.session.userLogged = usuarioALogearse;
      };
}
}

module.exports = recuerdameMiddleware;