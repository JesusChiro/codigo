import { useEffect, useState } from "react";
import { getCategorias } from "../services/categoriaService";

export const useMesas = () => {
  const [categorias, setCategorias] = useState([]);
  const [cargandoCategoria, setCargandoCategoria] = useState(true);

  useEffect(() => {
    getCategorias().then((data) => {
      setCategorias(data);
      setCargandoCategoria(false);
    });
  }, []);

  return {
    categorias: categorias,
    cargandoCategoria: cargandoCategoria,
  };
};
