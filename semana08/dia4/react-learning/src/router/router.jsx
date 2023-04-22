// para poder craer nuestras rutas debemos importar lo sgt
//BrowserRouter  va envolver todas las rutas qu creamos
// Routes : hijos esto nos permitira crears rutas hijos
//Route es el encaragdo de recibir el path y el element y
// renderiza el elemento como ruta

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Nosotros from "../pages/Nosotros";
import AppEjemplo from "../pages/AppEjemplo";
import Header from "../components/Header";


const Router = () => {
  //como esto es un compomente tenemos que usar el return
  //para poder crear las rutas
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AppEjemplo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
