import React, { useState } from 'react'
import API from '../API';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

  let nav = useNavigate();
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handlesubmit = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const createUser = async (data) => {

    console.log(data);
    
    const res = await API.post("/user/signup", data);
    const { user, token } = res.data;
    Cookies.set('token', token);
    nav("/");
  };

  const submit = (e) => {
    e.preventDefault();
    createUser(user);
    setuser({
      username: "",
      email: "",
      password: "",
    });
    alert("user SIgned Successfully..");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handlesubmit}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handlesubmit}
        />
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handlesubmit}
        />
        <input type="submit" value={"signup"} />
      </form>
    </div>
  );
};