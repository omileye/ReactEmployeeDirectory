// import React from 'react';
import './Directory.css';

function EmployeeListItem({ name, position }) {
  return (
    <div className="EmployeeListItem">
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
}

export default EmployeeListItem;
