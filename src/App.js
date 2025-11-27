import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Employee from "./component/employee";
import EmployeeForm from "./component/employeeForm";
import Login from "./component/login";
import Menu from "./component/Menu";
import Welcome from "./component/welcome";
import authService from "./service/AuthService.ts";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoute from "./protectRoutes";

const queryClient = new QueryClient();
function AppLayout(){
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    authService.isAuthenticated()
  );
  const handleLoginSuccess = (username) => {
    setIsAuthenticated(true);
    navigate("/welcome/" + username);
  };
  const handleLogout = () => {
    authService.logOut();
    setIsAuthenticated(false);
    navigate("/");
  };
  return (
    <>
      <Menu
        isAuthenticated={isAuthenticated}
        logOut={handleLogout}
        currentUser={authService.getCurrentUser}
      />
       
      <div className="App">
        <Routes>
          <Route path="/" element={<Login  onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/EmployeeForm" element={<EmployeeForm />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/welcome/:name" element={<Welcome />} />
          <Route path="employee" element={<Employee />} />
           {/* <Route 
          path="/welcome/:username" 
          element={
            <ProtectedRoute>
                <Welcome/>
            </ProtectedRoute>
          } /> */}
        </Routes>
      </div>
    </>
  );
}

  
  
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;