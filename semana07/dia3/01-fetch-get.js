// 1. Request con metodo GET, sin headers sin queryparams

const getUsers = async () => {
  const URL_USERS = "https://reqres.in/api/userssssss";
  //el metodo HTTP por defecto es GET
  const response = await fetch(URL_USERS, {
    method: "GET",
    headers: {},
  });
  const data = await response.json();
  console.log("getUsers", data);
};
/**
 * 2. Request con metodo Get, sin headers con query params
 */
const getNProducts = async () => {
  const URL = "https://fakestoreapi.com/products?limit=5&sort=desc";
  const response = await fetch(URL);
  const data = await response.json();
  console.log("getNproducts", data);
};
/**
 * 3. Request con metodo Post, sin headers con body
 */

const postCreateProduct = async () => {
  const URL = "https://fakestoreapi.com/products";
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify( {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    })
  });

const data = await response.json();
console.log('postCreateProduct', data);
};