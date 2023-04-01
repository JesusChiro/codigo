//querySelecto y querySelectorAll
//hermanos menores

//ambas funciones me permiten usar elementos
//html

const inputname = document.querySelector(".input_name");
console.log(inputname.value);

//esto es con id
const inputPassword = document.querySelector("#input_password");
console.log(inputPassword.value);

//tagname
const form = document.querySelector("form");
console.log(form);

//esto en particular retorna un Nodelist y esto es
//compatible con forEach

const inputs = document.querySelectorAll("input");
console.log(inputs);
//quiero filtrar e iterar este nodelist
const arrayInputsText = [];

inputs.forEach((input) => {
  if (input.type === "text") {
    arrayInputsText.push(input);
  }
});
console.log(arrayInputsText);
//**************************** */
//Este buvle se da por que podmeos convertirlo 
//en array
const arrayConvertido = Array.from(inputs);
console.log(arrayConvertido);

const arrayfilter = arrayConvertido.filter((input) => input.type == "text");
console.log("arrayfilter", arrayfilter)
