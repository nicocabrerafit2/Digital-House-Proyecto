import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //console.log("se monto el componente users");
    fetch("http://localhost:3001/apiProduct/apiList")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.data.products);
        setProducts(data.data.products);
        //console.log(data.data.products);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log("se actualizo el componente");
  }, [products]);

  useEffect(() => {
    return () => console.log("se desmonto el componente");
  }, []);
  console.log(products);
  return (
    <div>
      <h2 className="title">Listado de Productos</h2>

      <ul>
        {products.length === 0 && <p>Cargando</p>}
        {products.map((producto, i) => {
          return (
            <div key={i} className="card">
              <br />
              <h2>productoID: {producto.productoID}</h2>
              <h3>Nombre Producto:</h3>
              <h3>{producto.nombre}</h3>
              <h3>Descripción:</h3>
              <h4>{producto.descripcion}</h4>
              <a className="App-link" href={`/product/${producto.productoID}`}>
                Ver Producto
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
  );
}

export default Products;
