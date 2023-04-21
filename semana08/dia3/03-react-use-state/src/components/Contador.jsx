import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(500);

  //   const variable = arreglo[0];
  //   const modificarVariable = arreglo[1];

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  return (
    <div>
      <button className="btn btn-outline-danger" onClick={restar}>
        -1
      </button>
      Contador: {contador}
      <button className="btn btn-outline-primary" onClick={sumar}>
        +1
      </button>
    </div>
  );
};

export default Contador;
