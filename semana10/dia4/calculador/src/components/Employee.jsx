import PropTypes from "react";

const Employee = ({ id, name, discount, salary, onDeleteEmployee }) => {
  const calculateDiscountedSalary = (salary, discount) => {
    return salary - (salary * discount) / 100;
  };
  const discountSalary = calculateDiscountedSalary(salary, discount);
  return (
    <div>
      <h3 className="name-employer">
        {name} ({discount}%)
      </h3>
      <p>Salario original: {discountSalary} nuevo soles</p>
      <p>Salario con Descuento : {discountSalary}nuevos soles</p>
      <button onClick={() => onDeleteEmployee(id)}>Eliminar</button>
    </div>
  );
};
Employee.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    onDeleteEmployee: PropTypes.string.isRequired,
  };
export default Employee;
