export const getNameAndabilities = (pokemon) => {
  const result = {
    name: pokemon.name,
    abilities: pokemon.abilities.map((aby) => {
      return aby.ability.name;
    }),
  };
  return result;
};

export const saludar = () => console.log("buenas noches");
const suma = (a, b) => a + b;
/**
 * export deafult, exporta una funcion o variable
 * por defecto por archivo
 * por archivo se permite maximo 1 exportacion por
 * defecto
 */
export default suma;
