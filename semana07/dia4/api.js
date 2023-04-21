//que es una API? -- (Aplication progtamming interface)
// data--  json
//api no devuelve iformacion

//en js esiste una funciona la cual se ecmarga de poder hacer la peticion a una url
//FETCH()
//es una funcion  nativa
// existen vario tipos de peticiones
// GET = SIRVE PARA OBTENER INFO
//POST = SIRVE PARA CREAR DATOS
//PUT = SIRVE PARA ACTUALIZAR DATOS
//DELETE= SIRVE PARA ELIMIANR DATOS

//  function async
//las funciones async fueron creadas para poder ejecutar algo-- ye en caso de la ejecucion de esto
//demore .. mas de lo normal se espera para luego respodner la peticion --

//https://api.github.com/users/guillermosifu
//hay un tiempo de espera , no sabemos cuanto demorara - entonces usamos el async await..

//la estructura de una funciones fetch()

const imgProfile = document.querySelector("#img-profile");
const githubname = document.querySelector("#github-name");
const githubUsername = document.querySelector("#github-username");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubCompany = document.querySelector("#github-company");
const githubID = document.querySelector("#github-id");
const githubPais = document.querySelector("#github-pais");

//action

const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search");

githubActionSearch.onclick = () => {
  const username = githubInputSearch.value;
  githubInputSearch.value = "";
  if (username === "") {
    Swal.fire({
      title: "Error",
      text: "Llena el campo mano....",
      icon: "error",
    });
  }
  obtenerDatosGithub(username);
};

//evento enter
githubInputSearch.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    obtenerDatosGithub(event.target.value);
  }
});
//function fetch

const obtenerDatosGithub = async (username = "jesuschiro") => {
  //en este ejemplo await está haciendo lo sgte
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  setDataUser(data);
};

const setDataUser = (data) => {
  imgProfile.src = data.avatar_url;
  githubname.innerHTML = data.name;
  githubUsername.innerHTML = `@${data.login}`;
  githubJoined.innerHTML = data.created_at;
  githubFollowers.innerHTML = data.followers;
  githubFollowing.innerHTML = data.following;
  githubRepos.innerText = data.public_repos;
  githubCompany.innerHTML = data.company;
  githubID.innerText = data.id;
  githubPais.innerHTML = data.location;

};
obtenerDatosGithub();
