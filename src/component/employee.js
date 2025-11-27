import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmpService from "../service/EmpService";
const Employee = () => {
  const [employeeData, setemployeeData] = useState([]);
 // const { username } = useParams();
  useEffect(() => {
    setemployeeData(EmpService.employeeList());
  }, []);

  const handleLeaveChange = (id, event) => {
    EmpService.updateEmployee(id, { leaveStatus: event.target.checked });
    setemployeeData(EmpService.employeeList());

setemployeeData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );

   };

  return (
    <div>
      <h2>Employee List</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Leave Period</th>
            <th>Leave Status</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.department}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
              <td>{emp.leavePeriod}</td>
              <td>
                {emp.leaveStatus === true ? (
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={emp.leaveStatus}
                    onChange={(event) => handleLeaveChange(emp.id, event)}
                  ></input>
                ) : (
                  <input
                    checked={emp.leaveStatus}
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    onChange={(event) => handleLeaveChange(emp.id, event)}
                  ></input>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Employee;
