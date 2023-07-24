import React from 'react';

const Results = ({ data }) => {
  const { firstName, lastName, email, password, confirmPassword } = data;

  const getErrors = () => {
    const errors = {};

    // Validar el campo firstName
    if (firstName.length < 2) {
      errors.firstName = "First Name must be at least 2 characters long";
    }

    // Validar el campo lastName
    if (lastName.length < 2) {
      errors.lastName = "Last Name must be at least 2 characters long";
    }

    // Validar el campo email
    if (email.length < 5) {
      errors.email = "Email must be at least 5 characters long";
    }

    // Validar las contraseñas
    if (password !== confirmPassword) {
      errors.password = "Passwords do not match";
      errors.confirmPassword = "Passwords do not match";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  const errors = getErrors();

  return (
    <div>
      <h2>Results</h2>
      {errors.firstName && <p className="error">{errors.firstName}</p>}
      <p>First Name: {firstName}</p>

      {errors.lastName && <p className="error">{errors.lastName}</p>}
      <p>Last Name: {lastName}</p>

      {errors.email && <p className="error">{errors.email}</p>}
      <p>Email: {email}</p>

      {errors.password && <p className="error">{errors.password}</p>}
      <p>Password: {password}</p>

      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  );
};

export default Results;
