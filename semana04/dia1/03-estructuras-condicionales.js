//Estructuras condicionales

const edad = 18;

if (edad >= 18) {
  console.log("ya es mayor de edad");
} else {
  console.log("Aún es menor de edad");
}

//2.13 Hacer un algoritmo para aplicar un descuento
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
console.log("Total a pagar", resultado);

if (fecha === "martes" && totalcomprado > 100) {
  resultado = totalcomprado - totalcomprado * 0.15;
}

/*2.14 Una empresa desea determinar el monto de un cheque que 
debe proporcionar a uno de sus empleados que tendrá que ir 
por equis número de días a la ciudad de Monterrey; los gastos 
que cubre la empresa son: hotel, comida y 100.00 pesos diarios 
para otros gastos. El monto debe estar desglosado para cada concepto. 
Realice un diagrama de flujo y pseudocódigo que representen el 
algoritmo  que determine el monto del cheque*/

const viaticos = parseInt(prompt("Ingrese viáticos: "));
const otrosgastos = 100;
const dias = parseInt(prompt("Ingrese dias de estancia: "));

montototal = parseInt((viaticos + otrosgastos) * dias);
console.log("Su monto total a pagar es: ", montototal);

/*Realice el diagrama de flujo y pseudocódigo que 
representen el algoritmo para determinar el promedio 
que obtendrá un alumno considerando que realiza tres exámenes,
 de los cuales el primero y el segundo tienen una ponderación 
 de 25%, mientras que el tercero de 50%.*/
const nota1 = parseInt(prompt("Ingrese note de examen 1: "));
const nota2 = parseInt(prompt("Ingrese note de examen 2: "));
const nota3 = parseInt(prompt("Ingrese note de examen 3: "));

promedio