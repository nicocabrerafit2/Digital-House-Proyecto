import React from "react";
import "./App.css";
import MainBody from "./components/MainBody";
import { Routes, Router, Switch } from "react-router-dom";
import Users from "./components/Users";
import Products from "./components/Products";
import NotFound from "./components/NotFound";

function App() {
  return (
    <React.Fragment>
      <MainBody />
    </React.Fragment>
  );
}

export default App;
