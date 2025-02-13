import React, { useState } from "react";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import API from '../API';
const Login = () => {

  const nav = useNavigate()
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


    let res = await API.post("/user/login", data);
    const { user, token } = res.data;
    console.log(user, token);
    Cookies.set("token", token);
    if (token) {
      nav("/")
    } else {
      alert("You are not logged in")
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
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInput}
        />
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleInput}
        /><br/><br/>

        <input type="submit" value={"Login"} />
      </form>
    </div>
  );
};

export default Login;