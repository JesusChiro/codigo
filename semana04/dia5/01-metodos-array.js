const alumnos = ["Juan", "Pedro", "Maria", "Jose", "Luis", "Maria"];

//for
for (let index = 0; index < alumnos.length; index++) {
  //  console.log(alumnos[index]);
}

//for Each
let alumnosSoloMaria = [];
alumnos.forEach((alumno, index) => {
  //   console.log(index, alumno);
  if (alumno === "Maria") {
    alumnosSoloMaria.push(alumno + " " + "Perez");
  }
});
// ejemplo

const sumar = (a, b) => {
  return a + b;
};

//console.log(sumar(3, 15));

//map
const nuevosalumnos = alumnos.map((alumno, index) => {
  if (alumno === "Pedro") {
    return alumno + " " + index;
  } else {
    return alumno;
  }
});

//console.log(nuevosalumnos);

//filter

const alumnosSinMaria = alumnos.filter((alumno, index) => {
  return alumno !== "Maria";
});

//console.log(alumnosSinMaria);
//find
const alumnoEncontrado = alumnos.find((alumno, index) => {
  return alumno === "Maria";
});
console.log(alumnoEncontrado);

//findIndex
const indexAlumno = alumnos.findIndex((alumno) => {
  return alumno === "Jose";
});

console.log(indexAlumno);


//some
const existeAlumno = alumnos.some((alumno)=> {
    return alumno === "Maria"
})
//console.log(existeAlumno)
//contar focos retos

const focos = ["verde", "rojo", "blanco", "blanco"];

const contarFocos = () => {
  let focosBlancos = 0;
  let focosVerdes = 0;
  let focosRojos = 0;

  for (let index = 0; index < focos.length; index++) {
    if (focos[index] === "blanco") {
      focosBlancos++;
    }
    if (focos[index] === "verde") {
      focosVerdes++;
    }
    if (focos[index] === "rojo") {
      focosRojos++;
    }
  }
  return {
    focosBlancos: focosBlancos,
    focosVerdes: focosVerdes,
    focosRojos: focosRojos,
  };
};

console.log(contarFocos());
