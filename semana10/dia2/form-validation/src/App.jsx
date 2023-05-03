import { useForm } from "react-hook-form";
const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };
  console.log("errors", errors);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="input-name" className="form-label">
                    Nombres:
                  </label>
                  <input
                    type="text"
                    id="input-name"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    {...register("firstName", {
                      required: {
                        message: "El nombre es obligatorio",
                        value: true,
                      },
                      minLenght: 3,
                    })}
                  />
                  {errors.firstName && errors.firstName.type === "required" && (
                    <small className="text-danger">
                      El nombre es obligatorio
                    </small>
                  )}
                  {errors.firstName &&
                    errors.firstName.type === "minLenght" && (
                      <small className="text-danger">
                        El campo nombre debe contener 3 caracteres
                      </small>
                    )}
                </div>
                <div className="mb-3">
                  <label htmlFor="input-last-name" className="form-label">
                    Apellidos:
                  </label>
                  <input
                    type="text"
                    id="input-last-name"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    {...register("lastName", {
                      required: {
                        message: "El apellido es obligatorio",
                        value: true,
                      },
                      minLenght: 3,
                    })}
                  />
                  {errors.lastName && errors.lastName.type === "required" && (
                    <small className="text-danger">
                      El Apellido es obligatorio
                    </small>
                  )}
                  {errors.lastName && errors.lastName.type === "minLenght" && (
                    <small className="text-danger">
                      El campo Apellido debe contener 3 caracteres
                    </small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Documento de identidad:
                  </label>
                  <select
                    name=""
                    id="select-documento"
                    className="form-control"
                    {...register("selectDocumento")}
                  >
                    <option value="dni">DNI</option>
                    <option value="p">Pasaporte</option>
                    <option value="ce">Carné de extranjería</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  //disabled={!isValid}
                >
                  Registrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
