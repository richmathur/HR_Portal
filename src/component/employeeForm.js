import react, { useState } from "react";
import employeeService from "../service/EmpService";
import { useSessionStorage } from "../hook/useSessionStorage";
import { useNavigate } from "react-router-dom";

function EmployeeForm() {
  const [employeeData, setemployeeData] = useState([
    employeeService.employeeList(),
  ]);
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const department = form.department.value;
    const position = form.position.value;
    const salary = form.salary.value;
    const leavePeriod = form.leavePeriod.value;
   const data= employeeService.addEmployee({
      name,
      age,
      department,
      position,
      salary,
      leavePeriod,
    }); 
    if(data !=null){
      setemployeeData(employeeService.employeeList());
      navigate("/Welcome/"+name);
    }
    
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="container-fluid my-5 needs-validation"
      
    >
      <div className="row">
        <div className="col-md-6 mx-auto bg-light p-3 border">
          <div className="form-group row mt-md-3">
            <label className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
              ></input>
              <div className="invalid-feedback">
                Please provide a valid first name.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="form-group row mt-md-3">
            <label  className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                required
                type="number"
                className="form-control"
                id="age"
              ></input>
            </div>
          </div>
          <div className="form-group row mt-md-3">
            <label className="col-sm-2 col-form-label">
              Department
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="department"></input>
            </div>
          </div>
          <div className="form-group row mt-md-3">
            <label  className="col-sm-2 col-form-label">
              Position
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="position"></input>
            </div>
          </div>
          <div className="form-group row mt-md-3">
            <label  className="col-sm-2 col-form-label">
              Salary
            </label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="salary"></input>
            </div>
          </div>
          <div className="form-group row mt-md-3">
            <label  className="col-sm-2 col-form-label">
              Leave days
            </label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="leavePeriod"></input>
            </div>
          </div>

          <div className="form-group row mt-md-3">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EmployeeForm;
