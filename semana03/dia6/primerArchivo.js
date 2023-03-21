// const numero1 = 10;
// const numero2 = 20;
// let resultado = 0;
// let resta = 0;
// resultado = numero1 + numero2;
// resultado = numero1 - numero2;

// // console.log escribir el mensaje o ejecucion
// // en la consola

// console.log("el resultado de la suma es " + resultado);
// console.log("el resultado de la resta es " + resta);

// //alert - ventana emergente del browser
// alert("el resultado de la suma es " + resultado);

// const valor1 = prompt("ingresa valor 1");
// const valor2 = prompt("ingresa valor 2");
// let result= +valor1 + +valor2;
// alert("el resultado es ", result);

//vamos a hacer una calculadora
//abrir una ventana alerta donde podra ingresar
//y ese valor se guardara en una variable

//necesito que el usuario ingrese el tipo de
//operacion + - * /

const valor1 = prompt("ingrese valor 1");
const valor2 = prompt("ingrese valor 2");

const operacion = prompt("ingrese una operacion puede ser +, -, *, /");
let resultadoCalculadora = 0;
// ParseInt = convierte el string en Number
// la forma moderna de anteponiendo el signo
// +valor1, toString =convierte un number en
// string, ParseFloat = decimales...

if (operacion === "+") {
  resultadoCalculadora = +valor1 + +valor2;
  console.log("resultado", resultadoCalculadora);
} else if (operacion === "-") {
  resultadoCalculadora = +valor1 - +valor2;
  console.log("resultado", resultadoCalculadora);
} else if (operacion === "*") {
  resultadoCalculadora = +valor1 * +valor2;
  console.log("resultado", resultadoCalculadora);
} else if (operacion === "/") {
  resultadoCalculadora = +valor1 / +valor2;
  console.log("resultado", resultadoCalculadora);
}
document.write("hoola");