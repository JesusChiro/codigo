/**
 * Tabla de multiplicar de un numero n
 * 1-12
 */

// const n = 12;
// for (let i = 0; i <= 12; i++) {
//   console.log(n + " x " + i + " = " + n * i);
// }
/**
 * Ejercicio
 * Obtener la multiplicaion de 2
 * numeros a * b
 * -No usar el simbolo de multiplicacion *
 * usar solamente sumas
 * usar el ciclo for obvi
 */
// const a = 12;
// const b = 5;
// let suma = 0;
// for (let i = 1; i <= b; i++) {
//  suma=suma + a;
// }
// console.log(suma);
// /**
//  * Un usuario ingresará 5 numeros; de todos ellos
//  * se desean saber:
//  * -cantidad de nros positivos
//  * -cantidad de nro negativos
//  * -cantidad de nros iguales a cero
//  */
let posi = 0;
let nega = 0;
let cer = 0;
let ingreso = undefined;

for (let i = 0; i <= 4; i++) {
  ingreso = +prompt("Ingrese un número joven");
  if (ingreso > 0) {
    posi = posi + 1;
  } else if (ingreso === 0) {
    cer = cer + 1;
  } else {
    nega = nega + 1;
  }
}
console.log ('Cantidad de positivos: ', posi);
console.log ('Cantidad de negativos: ', nega);
console.log ('Cantidad de ceros: ', cer);