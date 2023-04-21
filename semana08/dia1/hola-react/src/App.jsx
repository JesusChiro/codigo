import "bootstrap/dist/css/bootstrap.min.css";
import Cabezera from "./Cabezera";
import Aside from "./aside";
import Principal from "./Principal";
import "./estilos.css";

function App() {
  //logica del componente
  return (
    <div>
      <Cabezera />
      <Aside />
      <Principal />
    </div>
  );
}

export default App;
