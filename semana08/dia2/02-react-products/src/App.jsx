import NavBar from "./Navbar";
import Productos from "./Productos";

function App() {
  /**
   * 1. Instalar bootstrap.
   * 2. Crear componente para mostrar el header de
   *    bootstrapusar el mas sencillo.
   * 3. Crear un componente llamando productos que 
   *    mostrará una lista de productos importados 
   *    desde productos.js.
   * 4. Crear un componente llamado priducto que reciba 
   *    un objeto de tipo producto y a su vez, este 
   *    componente deberia ser invocado desde el archivo 
   *    productos.js.
   * 5. Para representar un producto, considere usar los
   *    cards de bootstrap.
   * 6. Considerar usar rows, cols, containers, etc.
   */

  return (
    <div>
      <NavBar />
      <dir className="container"></dir>
      <Productos />
    </div>
  );
}

export default App;
