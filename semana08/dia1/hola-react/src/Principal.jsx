import Articulo from "./Articulo";

function Principal() {
  const articulo1 = {
    titulo: "titulo:1",
    imagen: "https://placehold.co/300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,modi inventore. Magni ducimus nisi doloremque perferendis accusamus enimlaudantium itaque aliquid esse nesciunt? At dolorem praesentium nemoadipisci autem accusamus!",
  };
  const articulo2 = {
    titulo: "titulo:2",
    imagen: "https://placehold.co/250",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,di inventore. Magni ducimus nisi doloremque perferendis accusamus enim laudantium itaque aliquid esse nesciunt? At dolorem praesentium nemo adipisci autem accusamus!",
  };
  const articulo3 = {
    titulo: "titulo:3",
    imagen: "https://placehold.co/250",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,di inventore. Magni ducimus nisi doloremque perferendis accusamus enim laudantium itaque aliquid esse nesciunt? At dolorem praesentium nemo adipisci autem accusamus!",
  };
  const articulos = [articulo1, articulo2, articulo3];
  const resultado = articulos.map((art) => {
    return <Articulo info={art} />;
  });

  const elemento = [
    <Articulo info={articulo1} />,
    <Articulo info={articulo2} />,
  ];

  return (
    <div>
      <h2>Articulos detallados</h2>

      {resultado}

      <Articulo info={articulo1} />
      <Articulo info={articulo2} />
      <Articulo info={articulo3} />
      {elemento}
    </div>
  );
}

export default Principal;
