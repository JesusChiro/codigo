import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useMesas } from "../../../hooks/useMesas";
import { useCategorias } from "../../../hooks/useCategorias";
import { usePlatos } from "../../..hooks/usePlatos";
export const PosContext = createContext();

const PosState = (props) => {
  const { children } = props;
  const [mesaSeleccionada, setMesaSeleccionada] = useState({ nro: "", id: 0 });
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({
    id: 0,
    nombre: "",
  });

  const { mesas, cargandoMesas } = useMesas();
  const { categorias, cargandoCategorias } = useCategorias();
  const { platos, cargandoPlatos } = usePlatos();

  const [pedidos, setPedidos] = useState([]);
  const modificarPedido = (platoId, accion) => {
    const copiaPedidos = [...pedidos];
    //1. preguntar si hay una mesa actualmente seleccioanda
    if (mesaSeleccionada.nro) {
      //2. preguntar si existe un pedido para la mesa selccionada
      const pedidoActual = pedidos.find(
        (pedido) => pedido.mesaId === mesaSeleccionada.id
      );
      //3. preguntar si el pedido actual existe, lo que implica que el arreglo de pedidos
      // ya tenía abierta la comanda, es decir, con al menos un plato
      if (pedidoActual) {
        //4. Buscamos el id del plato que deseo agregar para sumar cantidad
        //o crear la primera unidad del plato
        const platoPedidoActual = pedidoActual.platos.find(
          (plato) => plato.platoId === platoId
        );
        //5.preguntamos si el ya exisitia en esa mesa
        if (platoPedidoActual) {
          //en este punto todo depende de la accion
          if (accion === "sumar") {
            platoPedidoActual.cantidad += 1;
          } else {
            if (platoPedidoActual.cantidad > 1) {
              platoPedidoActual.cantidad -= 1;
            } else {
              pedidoActual.platos = pedidoActual.platos.filter(
                (plato) => plato.platoId !== platoId
              );
            }
          }
        } else {
          if (accion === "sumar") {
            //agregamos una unidad a la cantidad de platos
            pedidoActual.platos.push({ platoId: platoId, cantidad: 1 });
          } else {
            return;
          }
          //está demás indicar la sentencia else puesto que, si restamos un plato
          //que no existia en la mesa no debemos realizar ninguna accion
        }
        setPedidos([...copiaPedidos]);
      } else {
        //signifca que la mesa estaba vacía y que debemos crear el pedido que incluya
        //la primera unidad del plato que deseamos consumir
        if (accion === "sumar") {
          copiaPedidos.push({
            platos: [{ platoId: platoId, cantidad: 1 }],
            mesaId: mesaSeleccionada.id,
          });
          setPedidos([...copiaPedidos]);
        }
      }
    } else {
      //ToDo mostrar alerta de advertencia
    }
  };

  return (
    <PosContext.Provider
      value={{
        mesaSeleccionada: mesaSeleccionada,
        setMesaSeleccionada: setMesaSeleccionada,
        categoriaSeleccionada: categoriaSeleccionada,
        setCategoriaSeleccionada: setCategoriaSeleccionada,
        pedidos: pedidos,
        modificarPedido: modificarPedido,
        mesasAPI: { data: mesas, cargandoMesas: cargandoMesas },
        categoriasAPI: {
          data: categorias,
          cargandoCategorias: cargandoCategorias,
        },
        platosAPI: {
          data: platos,
          cargandoPlatos: cargandoPlatos,
        },
      }}
    >
      {children}
    </PosContext.Provider>
  );
};

PosState.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PosState;
