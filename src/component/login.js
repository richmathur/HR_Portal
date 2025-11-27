import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import authService from "../service/AuthService.ts";

const Login = ({ onLoginSuccess }) => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = authService.authenticate(username, password);
    if (result.success) {
      onLoginSuccess(username);
    } else {
      setError(result.message);
      // navigate("/");
    }
  };
  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate(`/welcome/${authService.getCurrentUser()}`);
    }
  }, [navigate]);
  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <h2>Login Page</h2>
        <div
          className="login-form container-sm rounded p-5 mx-auto text-center"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <div className="row mb-3">
            <div className="col-sm-3">
              <label className="form-label">Username</label>
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <label className="form-label">Password</label>
            </div>
            <div className="col-sm-6">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};
export default Login;
