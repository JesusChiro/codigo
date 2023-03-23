// /**
//  * Ejercicio 3.6
//  *
//  */
// const nroPersonas = 299;
// let total = 0;
// let costoPlato = 0;

// if (nroPersonas > 200 && nroPersonas <= 300) {
//   costoPlato = 85;
// } else {
//   if (nroPersonas > 300) {
//     costoPlato = 75;
//   } else {
//     costoPlato = 95;
//   }
// }
// total = costoPlato * nroPersonas;
// console.log(
//   "Total a pagar por " + nroPersonas + " personas es de: S/. " + total
// );

// /**
//  * Ejercicio 3.8
//  */
// /*. La forma de cobrar es la siguiente: si son 100 alumnos o más,
//  el costo por cada alumno es de $65.00; de 50 a 99 alumnos, el
//  costo es de $70.00, de 30 a 49, de $95.00, y si son menos de 30,
//  el costo de la renta del autobús es de $4000.00, sin importar el
//  número de alumnos.*/

// console.log("--- Ejercicio 3.8 ---");
// const cantAlum = 32;
// let costoBus = 0;

// if (cantAlum >= 100) {
//   costoBus = cantAlum * 65;
// } else {
//   if (cantAlum >= 50) {
//     costoBus = cantAlum * 70;
//   } else {
//     if (cantAlum >= 30) {
//       costoBus = cantAlum * 95;
//     } else {
//       costoBus = 4000;
//     }
//   }
// }

// console.log("Total a pagar por " + cantAlum + " es de: S/." + costoBus);

// /**
//  * Ejercicio 3.4
//  */
// console.log("--- Ejercicio 3.4 ---");
// let horas = 13;
// let totalparking = 1;

// if (horas >= 1 && horas <= 2) {
//   totalparking = totalparking * 5;
// } else {
//   if (horas >= 3 && horas <= 5) {
//     totalparking = totalparking * 10 + (horas * 4 - 8);
//   } else {
//     if (horas <= 10) {
//       totalparking = totalparking * 10 + 12 + (horas * 3 - 15);
//     } else {
//       totalparking = totalparking * 10 + 12 + 15 + (horas * 2 - 20);
//     }
//   }
// }
// console.log("Total a pagar por " + horas + " es de: S/." + totalparking);

/**
 * Ejercicio 3.5
 * Se tiene el nombre y la edad de tres personas. Se desea saber
 * el nombre y la edad de la persona de menor edad
 */
// console.log("--- Ejercicio 3.5 ---");
// const nombre1 = "Jesus";
// let edad1 = 24;
// const nombre2 = "Pedro";
// let edad2 = 23;
// const nombre3 = "Maria";
// let edad3 = 33;

// if (edad1 > edad2 && edad1 > edad3) {
//   console.log(nombre1 + " es el mayor de todos con " + edad1 + " años");
// } else {
//   if (edad2 > edad1 && edad2 > edad3) {
//     console.log(nombre2 + " es el mayor de todos con " + edad2 + " años");
//   } else {
//     if (edad3 > edad1 && edad3 > edad2) {
//       console.log(nombre3 + " es el mayor de todos con " + edad3 + " años");
//     } else {
//       if (edad3 === edad1 && edad3 === edad2) {
//         console.log("Todas las personas tienen la misma edad");
//       } else {
//         console.log("Error: coloque una edad válida");
//       }
//     }
//   }
// }
/**
 * Ejercicio 3.11
 *Se les  dará un bono por antigüedad a los empleados de una tienda. 
 Si tienen un año, se les dará $100; si tienen 2 años, $200, y así 
 sucesivamente hasta los 5 años. Para los que tengan más de 5, 
 el bono será de $1000.
 */
// console.log("--- Ejercicio 3.11 ---");
// const nombreEmpleado = "Jesus";
// const sue=1500;
// let antiguedad = 3;

// switch (antiguedad) {
//   case 1:
//     bono= 100
//     console.log(nombreEmpleado + " tendrá un bono de S/. " + bono);
//     console.log("Su sueldo esta vez será de: ", sue + bono);
//     break;
//   case 2:
//     bono= 200
//     console.log(nombreEmpleado + " tendrá un bono de S/. " + bono);
//     console.log("Su sueldo esta vez será de: ", sue + bono);
//     break;
//   case 3:
//     bono= 300
//     console.log(nombreEmpleado + " tendrá un bono de S/. " + bono);
//     console.log("Su sueldo esta vez será de: ", sue + bono);
//     break;
//   case 4:
//     bono= 400
//     console.log(nombreEmpleado + " tendrá un bono de S/. " + bono);
//     console.log("Su sueldo esta vez será de: ", sue + bono);
//     break;
//   case 5:
//     bono= 1000
//     console.log(nombreEmpleado + " tendrá un bono de S/. " + bono);
//     console.log("Su sueldo esta vez será de: ", sue + bono);
//     break;
//   default:
//     bono= 1000
//     console.log(nombreEmpleado + " tendrá un bono de S/. " + bono);
//     console.log("Su sueldo esta vez será de: ", sue + bono);
//     break;
// }
/**
 * Ejercicio 3.14
 * indique con letra la calificación que le corresponde: 10 es “A”,
 *  9 es “B”, 8 es “C”, 7 y 6 son “D”, y de 5 a 0 son “F”
 */
// console.log("--- Ejercicio 3.14 ---");
// const alumno = "Jesus";
// let nota = 6;

// if (nota > 10 || nota < 0) {
//   console.log("Digite solo notas entre 10 y 0");
// } else {
//   if (nota === 10) {
//     calif = "A";
//     console.log(alumno + " tiene su calificacion de " + calif);
//   } else {
//     if (nota === 9) {
//       calif = "B";
//       console.log(alumno + " tiene su calificacion de " + calif);
//     } else {
//       if (nota === 8) {
//         calif = "C";
//         console.log(alumno + " tiene su calificacion de " + calif);
//       } else {
//         if (nota === 7 || nota === 6) {
//           calif = "D";
//           console.log(alumno + " tiene su calificacion de " + calif);
//         } else {
//           if (nota <= 5 && nota >= 0) {
//             calif = "F";
//             console.log(alumno + " tiene su calificacion de " + calif);
//           } else {
//             console.log("Digite un caracter valido");
//           }
//         }
//       }
//     }
//   }
// }
/**
 * Ejercicio 3.19
determinar qué tipo de vacuna (A, B o C) debe aplicar a una persona, 
considerando que si es mayor de 70 años, sin importar el sexo, se le 
aplica la tipo C; si tiene entre 16 y 69 años, y es mujer, se le aplica 
la B, y si es hombre, la A; si es menor de 16 años, se le aplica la tipo A, 
sin importar el sexo.
 */

// console.log("--- Ejercicio 3.14 ---");
// let nombre = "Jesus";
// let sexo = "f";
// let edad = 15;

// if (edad >= 70) {
//   tipoVacuna = "C";
//   console.log(
//     "Hola " + nombre + " Le corresponde la vacuna tipo: " + tipoVacuna
//   );
// } else {
//   if (edad >= 16 && edad <= 69 && sexo === "f") {
//     tipoVacuna = "B";
//     console.log(
//       "Hola " + nombre + " Le corresponde la vacuna tipo: " + tipoVacuna
//     );
//   } else if (edad >= 16 && edad <= 69 && sexo === "m") {
//     tipoVacuna = "A";
//     console.log(
//       "Hola " + nombre + " Le corresponde la vacuna tipo: " + tipoVacuna
//     );
//   } else {
//     tipoVacuna = "A";
//     console.log(
//       "Hola " + nombre + " Le corresponde la vacuna tipo: " + tipoVacuna
//     );
//   }
// }
/**
 * Ejercicio 3.9
 * Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura
 *  amplia (A) y daños a terceros (B). Para el plan A, la cuota base es de
 * $1,200, y para el B, de $950. A ambos planes se les carga 10% del costo
 *  si la persona que conduce tiene por hábito beber alcohol, 5% si utiliza
 * lentes, 5% si padece alguna enfermedad –como def iciencia cardiaca o
 * diabetes–, y si tiene más de 40 años, se le carga 20%, de lo contrario
 * sólo 10%. Todos estos cargos se realizan sobre el costo base
 * */

console.log("--- Ejercicio 3.9 ---");
const planA = 1200;
const planB = 950;
let totalPagar = 0;
const planElegido = prompt("¿Qué plan desea? escriba a (Plan A) ó b (Plan B)");
const alcohol = confirm("¿Toma alcohol?");
const lentes = confirm("¿Usted usa lentes?");
const enfermedad = confirm("¿Padece usted de alguna enfermedad?");
const edad = +prompt("Ingrese su edad");
let precioBase = 0;

if (planElegido === "a") {
  precioBase = planA;
} else {
  precioBase = planB;
}

totalPagar = precioBase;

if (alcohol) {
  totalPagar = totalPagar + 0.1 * precioBase;
}

if (lentes) {
  totalPagar = totalPagar + 0.05 * precioBase;
}

if (enfermedad) {
  totalPagar = totalPagar + 0.05 * precioBase;
}
if (edad > 40) {
  totalPagar = totalPagar + 0.2 * precioBase;
} else {
  totalPagar = totalPagar + 0.1 * precioBase;
}

console.log("Su cuenta joven: " + totalPagar + " soles");
