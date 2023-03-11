import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";
import TopBar from "./TopBar";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("se monto el componente users");
    fetch("http://localhost:3001/apiUser/apiList")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUsers(data.data.users);
        //console.log(data.data.usersApi)
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log("se actualizo el componente");
  }, [users]);

  useEffect(() => {
    return () => console.log("se desmonto el componente");
  }, []);
  //console.log(users);
  return (
    <React.Fragment>
      <TopBar />
      <div className="container">
        <h2 className="title">Listado de Usuarios</h2>
        <ul>
          {users.length === 0 && <p>Cargando</p>}
          {users.map((user, i) => {
            return (
              <div key={i} className="card">
                <br />
                <h2>ID de Usuario: {user.usuarioID}</h2>
                <h3>Nombre de Usuario: {user.nombre}</h3>

                <h4>Email: {user.email}</h4>
                <a className="App-link" href={`/users/ ${user.usuarioID}`}>
                  Ver Usuario
                </a>
                <br />
              </div>
            );
          })}
        </ul>
        <a className="App-link-volver" href={`/`}>
          Volver al Home
        </a>
      </div>
    </React.Fragment>
  );
}

export default Users;
