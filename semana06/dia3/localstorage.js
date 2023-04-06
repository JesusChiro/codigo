const btnlogin = document.querySelector("#btn-login");

btnlogin.onclick = function (event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    //vamos a guardar el correo y el password en localstorage
    //setItem guardamos el valor en localstorage

    localStorage.setItem(input.name, input.value);
  });
  login();
};
//como capturo los datos del localstorage
//localStorage.getItem(key)
//const email = localStorage.getItem("email");
//const password = localStorage.getItem("password");
//como insertamos estos datos capturados desde
//local al storage a mi navegador

function login() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  form.style.display = "none";
  usuarioSection.style.display = "block";
  titleEmail.innerHTML = email;
  titlePassword.innerHTML = password;
}
const form = document.querySelector("#section-login");
const usuarioSection = document.querySelector("#usuario-logged");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");


const cerrarsesion = document.querySelector("#cerrar-sesion");

if (email !== null && password !== null) {
  login();
} else {
  usuarioSection.style.display = "none";
}


cerrarsesion.onclick = function () {
  localStorage.removeItem("password");
  localStorage.removeItem("email");
  form.style.display = "block"; 
  usuarioSection.style.display = "none";  
};
