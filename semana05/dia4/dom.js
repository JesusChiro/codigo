/**
 * existe dentro de js el
 * documento -- este atributo js
 * me va a permitir obtener
 * elementos desde HTML
 */
/**
 * Obtener elementos en base a su etiqueta
 * tag - etiqeuta
 * id - identificador
 * class - clases
 */
/**
 * Selectores --- 5 selectores
 */
/**
 * Como tengo 4 elementos con el tagname input
 * esto sera un array de inputs
 */
const inputs = document.getElementsByTagName("input");
console.log("estos son los inputs", inputs);

/**
 * recordemos que input es un HTMLcollection pero para poder
 * ser convertido a un array normal vamos a usar un Array.from
 * va a convertir el collection en un array
 *
 */

const newInputs = Array.from(inputs);
console.log("inputs", inputs);
console.log("newInputs", newInputs);

//iteramos la variable inputs
//map

newInputs.map((newInput) => {
  console.log("newsInputs", newInput);
});

//capturemos el form

const form = document.getElementsByClassName("formulario");
console.log("formulario", form);

//acceder el boton

const button = document.getElementsByClassName("btn-registro");

const divContent = document.getElementsByTagName("div");
console.log("divcontent", divContent);
const newDivContent = Array.from(divContent);
console.log(newDivContent);
newDivContent.forEach((element) => {
  console.log(element);
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const inputPassword = document.getElementById("input_password");
console.log(inputPassword);
//que forma accedemos al value al evento capturado
inputPassword.style.backgroundColor = "#f01";
console.log(inputPassword.value);
//

//cambio de color
const inputname = document.getElementById("input_name");
console.log(inputname);
inputname.style.backgroundColor = "#f92"; //cambia color de relleno de caja
inputname.style.color = "#f23"; //cambia color de letra
console.log(inputname.value);

const input2 = document.querySelector("input");
console.log("query", input2);

//
const inputlastname = document.getElementsByClassName("input_lastname");
inputlastname[0].style.color = "blue";
console.log(inputlastname);
