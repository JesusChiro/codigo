const numeros = [5, 20, 12, 6, 80, 9, 61, 5445, 25];
/**
 * length
 * Devuelve el numero de elementos que contiene un
 * array
 */
/**
 * push(elemento)
 * Inserta un nuevo elemento en un nueva
 * posicion al final del arreglo
 */
/**
 * forEach((elemento,index?, arreglo?)=>{})
 */

numeros.forEach((elemento, index, arreglo) => {
  console.log("elemento", elemento);
  console.log("index", index);
  console.log("arreglo", arreglo);
});

const precios = [52.1, 80, 90.5, 23.5, 45.52];
/**
 * [].map((elemento,index,arreglo)=>{})
 *
 */
const nuevosPrecios = precios.map((precio) => {
  return precio + 5;
});
console.log("nuevos precios", nuevosPrecios);

//¿que sucede si no retorno todos los elementos?
//ejercicions para incrementar en 5 soles los precios mayores a 60 soles
const nuevosPrecios1 = precios.map((precio) => {
  if (precio > 60) {
    return precio + 5;
  }
  return precio;
});
console.log("nuevos precios > 60", nuevosPrecios1);

const products = [
  {
    name: "Widget",
    price: 39.99,
    code: "MNO345",
    color: "red",
  },
  {
    name: "Gadget",
    price: 29.99,
    code: "DEF456",
    color: "yellow",
  },
  {
    name: "Thingamajig",
    price: 9.99,
    code: "DEF456",
    color: "purple",
  },
  {
    name: "Doohickey",
    price: 29.99,
    code: "MNO345",
    color: "green",
  },
  {
    name: "Thingamajig",
    price: 9.99,
    code: "JKL012",
    color: "purple",
  },
];
/**
 * Ejercicio para mapear los productos y
 * agregar a cada objetos el atributro
 * "key" cuyo valor debe ser la posicion
 * en la que se encuentra dicho producto
 */

const nuevosProducts = products.map((item, index) => {
  //   forma1: extendida
  //     const nuevoItem = {
  //     name: item.name,
  //     price: item.price,
  //     code: item.code,
  //     color: item.color,
  //     key: index,
  //   };
  //   return nuevoItem;
  //forma 2:
  const nuevoItem = { ...item, key: index };
  return nuevoItem;
});

//forma directa del ejercicio anterior
const nuevosPrecios2 = products.map((item, index) => ({
  ...item,
  key: index,
}));
console.log("nuevos productos", nuevosProducts);
console.log("nuevos productos v2", nuevosPrecios2);
