//Ejercicio-
/*
Dados 3 numeros enteros, evaluar el mayor 
de todos
*/
//debugger;
const n1 = -87;
const n2 = -90;
const n3 = -54;

if (n1 > n2) {
  if (n1 > n3) {
    console.log("el mayor es ", n1);
  } else {
    console.log("el mayor es ", n3);
  }
} else {
  if (n2 > n3) {
    console.log("el mayor es", n2);
  } else {
    console.log("El mayor es ", n3);
  }
}

//Ejercicio
//Dado un año, ejemplo 2020, evaluar
//si ese año es bisiesto

const anio = 1961;

if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
  console.log("año bisiesto");
} else console.log("año no bisiesto");
