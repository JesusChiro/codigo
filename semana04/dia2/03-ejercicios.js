/**
 * Ejercicio 3.6
 *
 */
const nroPersonas = 299;
let total = 0;
let costoPlato = 0;

if (nroPersonas > 200 && nroPersonas <= 300) {
  costoPlato = 85;
} else {
  if (nroPersonas > 300) {
    costoPlato = 75;
  } else {
    costoPlato = 95;
  }
}
total = costoPlato * nroPersonas;
console.log(
  "Total a pagar por " + nroPersonas + " personas es de: S/. " + total
);

/**
 * Ejercicio 3.8
 */
/*. La forma de cobrar es la siguiente: si son 100 alumnos o más,
 el costo por cada alumno es de $65.00; de 50 a 99 alumnos, el 
 costo es de $70.00, de 30 a 49, de $95.00, y si son menos de 30,
 el costo de la renta del autobús es de $4000.00, sin importar el
 número de alumnos.*/

console.log("--- Ejercicio 3.8 ---");
const cantAlum = 32;
let costoBus = 0;

if (cantAlum >= 100) {
  costoBus = cantAlum * 65;
} else {
  if (cantAlum >= 50) {
    costoBus = cantAlum * 70;
  } else {
    if (cantAlum >= 30) {
      costoBus = cantAlum * 95;
    } else {
      costoBus = 4000;
    }
  }
}

console.log("Total a pagar por " + cantAlum + " es de: S/." + costoBus);

/**
 * Ejercicio 3.4
 */
console.log("--- Ejercicio 3.4 ---");
let horas =13;
let totalparking = 1;


if (horas >=1 && horas <=2) {
    totalparking = totalparking * 5;
  } else {
    if (horas >= 3 && horas <=5) {
        totalparking = totalparking * 10 + ((horas *  4)-8);
    } else {
      if (horas <= 10) {
        totalparking = totalparking * 10 + 12+ ((horas *  3)-15);
      } else {
        totalparking = totalparking * 10 +12 +15+((horas * 2)-20);
      }
    }
  }
  console.log("Total a pagar por " + horas + " es de: S/." + totalparking);