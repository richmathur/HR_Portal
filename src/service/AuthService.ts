import { authResult } from "../InterFace/IEmployee";
import EmployeeService from "./EmployeeService";
import { useEffect } from "react";
class AuthService {
  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Simulates an authentication process.
   * @param {string} username
   * @param {string} password
   * @returns {authResult} An object containing a success boolean and a message string.
   */
  /*******  06984748-f9d6-4e88-b735-5410dd846a92  *******/
  
  
  
  authenticate(username: string, password: string): authResult {
    
    // instantiate service without arguments (constructor expects none)
    //const emp = new EmployeeService();

    // Simulate authentication process
    if ((username === "user" && password === "user") ) {
      sessionStorage.setItem('loginuser', username);

      return { success: true, message: "Authentication successful" };
    } else {
      return { success: false, message: "Invalid username or password" };
    }
  }

  
/**
 * useEffect hook to get the current user from session storage on mount.
 * This effect does not re-run on subsequent renders as it has no dependencies.
 */
  isAuthenticated() {
    return sessionStorage.getItem('loginuser') !== null;
  }
  getCurrentUser() {
    return sessionStorage.getItem('loginuser');
  }
  getAuthenticatedUser() {
    const user = sessionStorage.getItem('loginuser');
    return { username: user };
  }
  logOut() {
    sessionStorage.removeItem('loginuser');
    sessionStorage.removeItem('employeeData');
 
  }
}
export default new AuthService();
