import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import authService from "../service/AuthService.ts";
const Menu = ({isAuthenticated, logOut,currentUser}) => {
  const isUserAuthenticated=isAuthenticated;
  const username=currentUser;
  // const   handlelogOut = () => {
  //   authService.logOut();
  // };

  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          HR PORTAL    </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
       
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!isUserAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/EmployeeForm ">
                  Registration
                </Link>
              </li>
            )}
            {isUserAuthenticated && (
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/employee"
              >
                Employee List
              </a>
            </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
                 <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
                 <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
         
          <button className="btn btn-primary right"  onClick={logOut}>Logout</button>
        </div>
       
        
      </div>
    </nav>
  );
};

export default Menu;