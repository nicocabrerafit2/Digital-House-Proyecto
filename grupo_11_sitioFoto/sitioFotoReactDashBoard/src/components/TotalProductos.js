import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/apiProduct/apiList")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data.products);
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
    <Card
      style={{
        width: "10rem",
        margin: "20px",
        marginLeft: "60px",
        boxSizing: "content-box",
      }}
    >
      Total de productos: {products.length}
    </Card>
  );
}

export default Products;
