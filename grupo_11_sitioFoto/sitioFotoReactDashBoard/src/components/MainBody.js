import React from "react";
import "../../src/App.css";
import ImgBody from "./ImgBody";
import TopBar from "./TopBar";
import TotalProductos from "./TotalProductos";
import TotalUsuarios from "./TotalUsuarios";

function MainBody() {
  return (
    <React.Fragment>
      <div>
        <TopBar />
        <div style={{ display: "flex", alignContent: "space-between" }}>
          <TotalProductos />
          <TotalUsuarios />
        </div>
        <ImgBody />
      </div>
    </React.Fragment>
  );
}

export default MainBody;
