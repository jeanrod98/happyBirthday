import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/estilos.css";

import Header from "./Header";
import Footer from "./Footer";

import Presentacion from "./Presentacion";



function Index() {
    if(localStorage.getItem('permiso')){

        localStorage.removeItem('permiso')
    }
  
  // estados de la app
 
  

  return (
    <div className="Index">
      <Header />
      <div className="container">
        <div className="presentacion">
           <Presentacion />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
