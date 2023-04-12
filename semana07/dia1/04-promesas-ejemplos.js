const url = "https://fakestoreapi.com/products";
const contenedor = document.querySelector("#contenedor");

const obtenerProductos = () => {
  axios.get(url).then((response) => {
    console.log("response", response.data);
    dibujarProductos(response.data);
  });
};

// const dibujarProductos = (productos = []) => {
//   productos.forEach((prod) => {
//     const columna = document.createElement("div");
//     columna.classList.add("col-md-3");
//     columna.innerText = prod.title;
//     contenedor.appendChild(columna);
//   });
// };
// const dibujarProductos = (productos = []) => {
//   productos.forEach((prod) => {
//     const columna = document.createElement("div");
//     columna.classList.add("col-md-3");
//     columna.innerHTML = `<div class="card" style="width: 18rem;">
//                         <img src="${prod.image}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                         <h5 class="card-title">${prod.title}</h5>
//                         <p class="card-text">${prod.description}</p>
//                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                         </div> </´div>;`;
//     contenedor.appendChild(columna);
//   });
// };

const dibujarProductos = (productos = []) => {
  productos.forEach((prod) => {
    const columna = document.createElement("div");
    columna.classList.add("col-md-3");

    const card = document.createElement("div");
    card.classList.add("card", "puntero");
    card.style.backgroundColor = "#ff5566";
    card.onclick = function () {
      alert(prod.price);
    };

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = prod.image;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = prod.title;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = prod.description;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(img);
    card.appendChild(cardBody);

    columna.appendChild(card);

    contenedor.appendChild(columna);
  });
};

obtenerProductos();
