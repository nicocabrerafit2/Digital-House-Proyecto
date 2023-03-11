import React from "react";
import "../../src/App.css";

function TopBar() {
  return (
    <React.Fragment>
      <div>
        <h1>USUARIOS Y PRODUCTOS</h1>

        <nav>
          <a className="App-link" href={`/users`}>
            Listado Usuarios
          </a>

          <a className="App-link" href={`/products`}>
            Listado Productos
          </a>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default TopBar;
