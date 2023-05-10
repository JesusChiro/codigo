import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const PosContext = createContext();

const PosState = (props) => {
  const { children } = props;

  const [mesaSeleccionada, setMesaSeleccionada] = useState({ nro: "", id: 0 });
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({
    id: 0,
    nombre: "",
  });

  const [pedidos, setPedidos] = useState([]);
  const agregarPlato = (platoId) => {
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
          //agregamos una unidad a la cantidad de plato
          platoPedidoActual.cantidad += 1;
        } else {
          //agregamos una unidad a la cantidad de platos
          pedidoActual.platos.push({ platoId: platoId, cantidad: 1 });
        }
        setPedidos([...copiaPedidos]);
      } else {
        //signifca que la mesa estaba vacía y que debemos crear el pedido que incluya
        //la primera unidad del plato que deseamos consumir
        copiaPedidos.push({
          platos: [{ platoId: platoId, cantidad: 1 }],
          mesaId: mesaSeleccionada.id,
        });
        setPedidos([...copiaPedidos]);
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
        agregarPlato: agregarPlato,
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
