/**
 * El uso de la sentencia await sirve para :
 * -esperar el resultado que retorna una promesa y guardarla
 *  en un avariable.
 * -La sentencia await solo se puede usar dentro de una
 * funcion async
 */

const getProductos = async () => {
  const response = await axios.get("https://reqres.in/api/users/2");
  //   console.log("response", response);
  //throw "mensaje de error";
  return response.data;
};

getProductos()
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("error", error);
  });console.log(1);
console.log(2);
console.log(3);
console.log(4);


//

axios.get('https://reqres.in/api/users/2').then((response) => {
	console.log(response);
});

async function getUser() {
	const response = await axios.get('https://reqres.in/api/users/2');
	return response.data
}
getUser().then((data)=>{
console.log('data get User', data)
});

const getUserV2 = async () => {
	const response = await axios.get('https://reqres.in/api/users/2');

    return response.data
};
getUserV2();