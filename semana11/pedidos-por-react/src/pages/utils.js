import { platosArray } from "../mook/FakeData";

export const getPlatoByPlatoId = (platoId) => ({
  ...platosArray.find((plato) => plato.id === platoId),
});
