//Un objeto puede tener funciones como atributos

const vehiculo = {
  marca: "Audi",
  modelo: "q5",
  mantenimientos: [
    {
      fecha: "02/05/23",
      kilometraje: 17000,
    },
    {
      fecha: "05/05/24",
      kilometraje: 27000,
    },
  ],
  imprimirMarcaYModelo: function () {
    //console.log("audi q5");
    console.log("Marca", this.marca);
    console.log("Modelo", this.modelo);
  },
};
//console.log("vehiculo", vehiculo);
vehiculo.imprimirMarcaYModelo();

//Imprimir segundo mantenimiento
console.log("segundo mantenimiento", vehiculo.mantenimientos[1]);

//NO COPIAR OBJETOS DE LA SIGUIENTE MANERA
const vehiculo2 = vehiculo;
vehiculo2.modelo = "q3";

console.log("vehiculo1", vehiculo);
console.log("vehiculo2", vehiculo2);

//Funcion que crea objetos
// function creadorDeVehiculos() {
//   const vehiculoGenerico = {
//     marca: "",
//     modelo: "",
//     anio: 0,
//     mantenimientos: [],
//   };
//   return vehiculoGenerico;
// }
function creadorDeVehiculos(
  pMarca = " ",
  pModelo = " ",
  pAnio = 0,
  pMantenimiento = []
) {
  const vehiculoGenerico = {
    marca: pMarca,
    modelo: pModelo,
    anio: pAnio,
    mantenimientos: pMantenimiento,
  };
  return vehiculoGenerico;
}

function mantenimientoGenerico(pfecha = "", pKilometraje = 0, pAceite = false) {
  return {
    fecha: pfecha,
    kilometraje: pKilometraje,
    aceite: pAceite,
  };
}
const mazdaCX3 = creadorDeVehiculos(
  "Mazda",
  "CX3",
  2023,
  mantenimientoGenerico[mantenimientoGenerico("05/05/23", 15000, true)],
  mantenimientoGenerico[mantenimientoGenerico("05/05/24", 25000, true)]
);
const bmwX4 = creadorDeVehiculos("BMW", "X4", 2021, []);
const mercedesGLA450 = creadorDeVehiculos();
// mazdaCX3.anio = 2023;
// bmwX4.anio = 2024;
console.log("mazda", mazdaCX3);
console.log("bmw", bmwX4);
console.log("mercedesGLA450", mercedesGLA450);
