import { Navigate } from "react-router-dom";
import { useSessionStorage } from "../hook/useSessionStorage";

class EmpService {
  
  constructor() {
    this.employee = [
      {
        id: 1,
        name: "John k Doe",
        age: 30,
        department: "IT",
        position: "Software Engineer",
        salary: 50000,
        leavePeriod: 10,
        leaveStatus: false,
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 28,
        department: "HR",
        position: "HR Manager",
        salary: 60000,
        leavePeriod: 3,
        leaveStatus: false,
      },
      {
        id: 3,
        name: "Richa Mathur",
        age: 36,
        department: "HR",
        position: "HR Manager",
        salary: 60000,
        leavePeriod: 9,
        leaveStatus: true,
      },
    ];
  }
  employeeList() {
    if (sessionStorage.getItem("employeeData") !== null)
      this.employee.push(JSON.parse(sessionStorage.getItem("employeeData")));
      //this.employee = JSON.parse(sessionStorage.getItem("employeeData"));
    return this.employee;
  }
  addEmployee(employee) {
    employee.id = this.employee.length + 1;
    employee.leaveStatus = false;
    this.employee.push(employee);
    sessionStorage.setItem("employeeData", JSON.stringify(employee));
    return employee;
  }
  updateEmployee(id, updates) {
    const index = this.employee.findIndex((emp) => emp.id === id);
    console.log(
      "Updating user with id" +
        id +
        "at index" +
        index +
        "with updates" +
        JSON.stringify(updates)
    );
    if (index !== -1) {
      //this.employee[index] = employee;
      this.employee[index] = { ...this.employee[index], ...updates };
      console.log(
        "Updated employee" + JSON.stringify(this.employee[index].leaveStatus)
      );
      return this.employee;
    }
    return null;
  }

  deleteEmployee(id) {
    const index = this.employee.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.employee.splice(index, 1);
      return true;
    }
    return false;
  }
}

const EmployeeService = new EmpService();
export default EmployeeService;

//export default EmpService;
