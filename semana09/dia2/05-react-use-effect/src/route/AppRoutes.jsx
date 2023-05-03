import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import ProductSection from "../components/pages/productSection";
import Header from "../components/header";
//import React from "react";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductSection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
