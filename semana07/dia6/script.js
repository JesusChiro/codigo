const UsersList = document.getElementById("users.lists");
const loader = document.getElementById("loader");
const getUsers = async () => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET", // *GET, POST, PUT, DELETE, OPTIONS
    headers: {
      Authorization: "Bearer fdsvsavs.fsadfvafgveagvergerge.wgefrge",
    },
    // body: json.strigify({
    //   nombre: "Miguel",
    //   edad: 30,
    // }),
  })
    .then((response) => response.json())
    .then((json) => setUserInView(json));

  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const json = await response.json();
  //   console.log("Con await", json);
};
const setUserInView = (users) => {
  users.forEach((user, i) => {
    const userHTML = `
    <div class="card"> 
        <p>${user.name}</p>
        <p>${user.email}</p>
        <p>${user.phone}</p>
        <button type="button" class="btn_profile">Show Profile</button>
    </div>`;
    UsersList.innerHTML += userHTML;
  });
  loader.style.display= "none";
};

getUsers();
