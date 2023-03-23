// const nro = 2;
// const nombre = "asd";
// const casado = true;
// const libros = ["HP1", "HP2", "HP3"];
// console.log(libros);
// console.log(libros[2]);

const notas = [7, 5, 3, 13, 6, 12];
// console.log("notas", notas);
// console.log("suma de la 1era con la ultima", notas[0] + notas[5]);

//reasignacion de un elemento
notas[4] = 20;
// console.log("notas nuevas", notas);

// //propiedades
// console.log("Cantidad de libros");
// console.log(libros.length);

// console.log("Cantidad de notas");
// console.log(notas.length);

// libros.push("Aves sin nido");
// console.log(libros);

// //recorriendo un arreglo
// let acumulador = 0;
// for (let i = 0; i < notas.length; i++) {
//   acumulador = acumulador + notas[i];
// }
// console.log("acumulador", acumulador);
//ejercicio:
//¿cuantos numero del arreglo de notas son pares?
//¿cuantos numero del arreglo de notas son impares?
// let par = 0;
// let impar = 0;
// for (let i = 0; i < notas.length; i++) {
//   if (notas[i] % 2 === 0) {
//     par++;
//   } else {
//     impar++;
//   }
// }
// console.log("Total pares", par);
// console.log("Total impares", impar);

/**
 * Ejercicio mejorando Reto
 * al enunciado anterior, imprimir tambien,
 * qué numeros son pares y que numeros son impares,
 * ojo imprimir al final no en cada iteracion
 */

let par1 = 0;
let impar1 = 0;
let arraypar = [];
let arrayimpar = [];

for (let i = 0; i < notas.length; i++) {
  if (notas[i] % 2 == 0) {
    arraypar.push(notas[i]);

  } else {
    arrayimpar.push(notas[i]);

  }
}
console.log("Total pares", arraypar);
console.log("Total impares", arrayimpar);
