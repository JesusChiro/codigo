//console.log(promedioDosNumeros(2, 4));
function promedioDosNumeros(num1, num2) {
  return (num1 + num2) / 2;
}

const calcularEdad = (anioNacimiento) => {
  return 2023 - anioNacimiento;
};
//console.log(calcularEdad(2000));

const calcularEdad2 = (anioNacimiento) => 2023 - anioNacimiento;
//console.log(calcularEdad2(2000));

// const sumarNNumeros = (a, b) => {
//   return a + b;
// };/}

// console.log(sumarNNumeros(2, 4));

const sumarNNumeros = (...numeros) => {
  //   console.log(numeros);
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
};

// console.log(sumarNNumeros(2, 4));

const concatenarCadenas = (...cadenas) => {
  console.log(cadenas);
  return cadenas.join(" ");
};
console.log(concatenarCadenas("hola", "mundo", "js", "2023", "CodiGo"));
// const ternarios = (num1, num2) => {
//   return num1 === num2 ? num1 : num2;
// };
// console.log(ternarios(13, 27));
const ternarios = (num1, num2) => {
  return num1 !== num2 ? "Son iguales" : "Son diferentes";
};
//console.log(ternarios(13, 27));

const ternarios2 = (acepto) => {
  return acepto ? "Acepto" : "No acepto";
};

console.log(ternarios2(false));
