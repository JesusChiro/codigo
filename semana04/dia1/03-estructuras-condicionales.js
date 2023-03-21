//Estructuras condicionales

const edad = 18;

if (edad >= 18) {
  console.log("ya es mayor de edad");
} else {
  console.log("Aún es menor de edad");
}

//Hacer un algoritmo para aplicar un descuento
// del 15% de la compra total si y solo sí
//el día de la semaana es martes.
//en caso contrario , no apicar ningun descuento

//Ojo: no usar sentencia else

const fecha = "martes";
const totalcomprado = 500;
let resultado = totalcomprado;

if (fecha == "martes") {
  resultado = totalcomprado - totalcomprado * 0.15;
  console.log("Aplica la promo");
  console.log("Su total a pagar: ", resultado);
} else {
  console.log("No aplica la promo");
}

//Modificar el anterior ejercicio, para que el
//descuento, se realice si y solo sí, es día "martes"
//y el valor de compra excede los 1000 soles

if (fecha == "martes") {
  if (totalcomprado > 1000) {
    resultado = totalcomprado - totalcomprado * 0.15;
    console.log("Aplica la promo");
    console.log("Su total a pagar: ", resultado);
  } else {
    console.log("Es martes pero no califica por compras menores a 1000");
  }
} else {
  console.log("No califica por no ser martes");
}
console.log('Total a pagar', resultado)