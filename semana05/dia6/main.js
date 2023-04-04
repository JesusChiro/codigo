////addEventListener

const probando = document.querySelector("#btn-prueba");

probando.addEventListener("click", () => {
  alert("esta es la prueba");
});

const alertapregunta = document.querySelector("#btn-pregunta");
alertapregunta.onclick = function () {
  Swal.fire("alguna pregunta?", "aca el texto de la pregunta", "question");
};

const alertaerror = document.querySelector("#btn-error");
alertaerror.onclick = function () {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="">Why do I have this issue?</a>',
  });
};

const alertapeligro = document.querySelector("#btn-peligro");
alertapeligro.onclick = function () {
  Swal.fire({
    position: "top-end",
    icon: "warning",
    title: "Peligro",
    showConfirmButton: false,
    timer: 1500,
  });
};

const alertasuccess = document.querySelector("#btn-satisfactoria");
alertasuccess.onclick = function () {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
};

const alertainfo = document.querySelector("#btn-info");
alertainfo.onclick = function () {
  Swal.fire({
    position: "top-end",
    icon: "info",
    title: "Info",
    showConfirmButton: false,
    timer: 1500,
  });
};

const alertconfirm = document.querySelector("#btn-alerta-botones");
alertconfirm.onclick = function () {
  Swal.fire({
    title: "Desea guardar los cambios",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};

const alertnoti = document.querySelector("#btn-notificacion");
alertnoti.onclick = function () {
  Swal.fire({
    title: "Esta es una notificacion",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

const alertconimg = document.querySelector("#alert-img");
alertconimg.onclick = function () {
  Swal.fire({
    title: "Mi Imagen tesst",
    text: "Mi imagen de prueba",
    imageUrl: "./One_piece.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
};

const alertconinputs = document.querySelector("#btn-alerta-inputs");
alertconinputs.onclick = function () {
  Swal.fire({
    title: "Escribe tu nombre ",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url,
      });
    }
  });
};
