import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import API from "../Config/API";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const nav = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginUser = async (data) => {
    try {
      let res = await API.post("/users/login", data);
      const { user, token } = res.data;
      Cookies.set("token", token);
      if (token) {
        nav("/");
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials. Try again.");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInput}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInput}
          required
        />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
      </form>
    </div>
  );
};

export default Login;