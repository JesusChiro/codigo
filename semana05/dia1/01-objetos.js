//Objetos
const persona = {
  nombre: "Yuli",
  dni: "12345678",
  telefono: "987345986",
  idiomas: ["Español", "Ingles", "Frances"],
};
console.log("teléfono:", persona.telefono);
console.log("idiomas:", persona.idiomas);

//Inyectando un nuevo idioma

persona.idiomas.push("Aymara");
console.log("persona actualizada", persona);

//Modificando el telefono
persona.telefono = "999999999";
console.log("nuevo telefono", persona);

//Agregando un nuevo atributo a la persona
//(no se recomienda agregar nuevos atributos
//a un objeto)
//persona.direccion = ["calle Lima", "Miraflores"];
persona.direccion = {};
persona.direccion.calle = "Lima";
persona.direccion.distrito = "Miraflores";
persona.direccion.ciudad = "Arequipa";
console.log("persona con direccion agregada", persona);

//Agregado un atributo a la persona (forma 2)
persona.estudios = {
  primaria: "Escuela de Los Andes",
  secundaria: "Colegio Nuestra Señora de Fatima",
  superior: "UNMSM",
};
console.log("persona actualizada", persona);
