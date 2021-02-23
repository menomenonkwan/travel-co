import React from 'react';

const Employee = ({employee}) => {
  return (
    <div className="employee-card">
      <img src={employee.image} alt={employee.name} />
      <h3>{employee.name}</h3>
      <h4>{employee.job}</h4>
      <p>{employee.desc}</p>
    </div>
  )
}

export default Employee;