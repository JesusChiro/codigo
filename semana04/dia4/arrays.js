//arrays
//cuantos datos puede recibir un arrays?

//conjunto de datos
//como declaramos un arrays
//es muy parecida a una variable

let nombre = "guillermo";
let productos = ["guillermo", "jesus", "laptop", 1200, true];
console.log(nombre);
console.log(productos);

//recorriendo el arreglo for

for (let i = 0; i >= productos.length; i++) {
  console.log(productos[i]);
}

//como capturar un dato de un arreglo
console.log(productos[2]);

//como reemplazar dato de un arreglo
productos[3] = 2000;

//como puedo saber cuantos elemento hay en un array
console.log("cantidad de productos: ", productos.length);

const pi = 3.141633333;
