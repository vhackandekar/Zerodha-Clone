import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "./Loginpage.css";

const Loginpage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting to login with:', inputValue);
      const { data } = await api.post("/login", {
        ...inputValue,
      });
      console.log("Response data:", data); // Debug log
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log('Login successful, redirecting to dashboard');
        // Wait a bit longer to ensure everything is properly set
        setTimeout(() => {
          window.location.href = "http://localhost:3000/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Error:", error);
      handleError(error.message || "Login failed");
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-page container-fluid">
      <div className="login-card">
        <h2>Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <span className="alt-text">
            Don't have an account? <Link to={'/signup'}>Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Loginpage;
