console.log(1);
console.log(2);

function obtenerDatos(dni, callback) {
  setTimeout(() => {
    callback("Jesus Chiroque");
  }, 1000);
}
obtenerDatos("70988317", function (nombre) {
  console.log(nombre);
});
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// setTimeout(() => {
//   console.log(4);
// }, 1000);
console.log(5);
console.log(6);
