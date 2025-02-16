import React, { useState } from "react";
import API from "../Config/API";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import the CSS file

export const Signup = () => {
  let nav = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const createUser = async (data) => {
    try {
      const res = await API.post("/users/signup", data);
      const { user, token } = res.data;
      Cookies.set("token", token);
      alert("User signed up successfully!");
      nav("/");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user);
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </form>
    </div>
  );
};