//En js podemos tambien
//escribir desde este documento

documento.write("hola mundo");

//vamos a crear una lista usando js
// 1 insertar unalista dentro del div
//#container-list
//2 insertar elementos dentro de mi lista li

const containerList = document.querySelector("#container-list");
//dentro de js existe una funcion creatElement la
//cual nos permite crear elementos

const ul = document.createElement("ul");
ul.className = "lista";

//3 iterar debe convertirla en un array--(htmmlcollection
//o un nodelist)
const inputs = arra.from(document.querySelectorAll("inputs"));
inputs.map((input) => {
  const li = docuement.createtextnode(input.value);
  li.appenchild = contenido;
  ul.appendChild(li);
});
console.log(ul);
containerList.appendChild(ul);
