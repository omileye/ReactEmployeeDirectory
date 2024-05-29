// import React from 'react';
import EmployeeListItem from './EmployeeListItem';
import './Directory.css';

function EmployeeList() {
  return (
    <div className="EmployeeList">
      <EmployeeListItem name="Abraham E. Tavarez" position="Software Engineer" />
      <EmployeeListItem name="Colton Wright" position="Software Engineer" />
      <EmployeeListItem name="John Doe" position="Software Engineer" />
      <EmployeeListItem name="Jane Smith" position="Project Manager" />
      {/* Add more EmployeeListItem components as needed */}
    </div>
  );
}

export default EmployeeList;
