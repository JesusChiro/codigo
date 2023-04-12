/**
 * Debemos encadenar promesas SI y SOLO SI una depende de la otra
 */

const categorias = [
  { id: 1, name: "terror" },
  { id: 2, name: "comedia" },
  { id: 3, name: "accion" },
];

const peliculas = [
  { categoria: "comedia", titulo: "El tonto y el más tonto" },
  { categoria: "comedia", titulo: "La máscara" },
  { categoria: "terror", titulo: "La monja" },
  { categoria: "terror", titulo: "Actividad Paranormal" },
  { categoria: "accion", titulo: "Terminator I" },
  { categoria: "accion", titulo: "Rápidos y Curiosos" },
];

const getCategoriaById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const categoriaEncontrada = categorias.find((c) => c.id === id);
      if (categoriaEncontrada) {
        resolve(categoriaEncontrada.name);
      } else {
        reject("nay");
      }
    }, 2000);
  });
};

const getPeliculasByCategoria = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pelis = peliculas.filter((p) => name === p.categoria);
      //.map((p) => p.titulo);
      resolve(pelis);
    }, 2000);
  });
};

//Suponer que yo solo dispongo de un dato
//el id del genero del cual quiero obtener las peliculas

const id = 50;
getCategoriaById(id)
  .then((categoria) => {
    console.log(categoria, "categoria");
    getPeliculasByCategoria(categoria).then((pelis) => {
      console.log("pelis", pelis);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
//Forma 2 de encadenar promesas
getCategoriaById(id)
  .then((nombreDeCategoria) => {
    return getPeliculasByCategoria(nombreDeCategoria);
  })
  .then((pelisEncontradas) => {
    console.log("peliEncontradas", pelisEncontradas);
  })
  .catch((errorGenerico) => {
    console.log("errorGenerico", errorGenerico);
  });
//Forma 3, en una funcion async usando awaitparams) {

const caller = async () => {
  const nombreCat = await getCategoriaById(1);
  const pelis = await getPeliculasByCategoria(nombreCat);
  console.log("final", pelis);
};

caller();
