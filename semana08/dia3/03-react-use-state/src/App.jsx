import React from "react";
import Contador from "./components/contador";
import Aleatorio from "./components/Aleatorio";
import Frase from "./components/frase";

const App = () => {
  return (
    <div>
      <Contador />
      <hr />
      <Aleatorio />
      <hr />
      <Frase />
    </div>
  );
};

export default App;
