// Implementar un algoritmo que reciba 2 argumentos y los sume,
// el resultado se deberá imprimir en pantalla.
let opciones = parseInt(
  prompt(
    "¿Que opciones desea \n 1-suma \n 2-promedio \n 3-area triangulo \n 4-area rectangulo \n 5-area circunferencia"
  )
);

switch (opciones) {
  case 1:
    // const a = parseInt(prompt("ingrese primer numero"))
    function suma(a, b) {
      return a + b;
    }
    console.log(suma(15, 14));
    break;

  case 2:
    function promedio(a, b, c, d) {
      return (a + b + c + d) / 4;
    }
    console.log(promedio(15, 14, 13, 12));
    break;
  case 3:
    function area(a, b) {
      return (a * b) / 2;
    }
    console.log(area(15, 14));
    break;
  case 4:
    function arear(a, b) {
      return a * b;
    }
    console.log(arear(10, 12));
    break;
  case 5:
    function circunferencia(a) {
      return 2 * (3.14 * (a * a));
    }
    console.log(circunferencia(4));
    break;
  default:
    console.log("ingresaste un numero fuera del rango del menú");
}
