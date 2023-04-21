//const axios = require("axios");
import axios from "axios";
import { getNameAndabilities, saludar } from "./utils.js";
import miSuma from "./utils.js";
console.log("hola mundo, proyecto nuevo!");

axios.get("https://pokeapi.co/api/v2/pokemon/4/").then((data) => {
  const pokemon = getNameAndabilities(data.data);
  console.log(pokemon);
});

console.log(miSuma(5, 50));
saludar();
