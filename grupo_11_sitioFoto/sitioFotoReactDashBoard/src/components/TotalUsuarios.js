import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Card from "react-bootstrap/Card";

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
    <Card style={{ width: "10rem", margin: "20px", boxSizing: "content-box" }}>
      Total de productos: {users.length}
    </Card>
  );
}

export default Users;
