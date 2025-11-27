
class EmployeeService {
  constructor() {
    this.employee = [
        {
            name: "user1",
            age: 30,
            department: "IT",
            position: "Software Engineer",
            salary: 50000,
            leavePeriod:30,
            leaveStatus: true
        },
        {
            name: "Jane Smith",
            age: 28,
            department: "HR",
            position: "HR Manager",
            salary: 60000,
            leavePeriod: 10,
            leaveStatus:true
        }
    ];
  }
  employeeList() {
    console.log("Employee data fetched");
    console.log("Employee data fetched" + JSON.stringify(this.employee));
    return this.employee;
  }
 
}

export default EmployeeService;
