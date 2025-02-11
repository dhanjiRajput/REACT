import React, { useState } from 'react'
import API from '../API';

export const Signup = () => {

  const [user,setuser]=useState({
    username:"",
    email:"",
    password:"",
  });

  const handlesubmit=(e)=>{
    const {name,value}=e.target;
    setuser({...user,[name]:value});
  };

  const createUser=async(data)=>{
    console.log(data);
    
    const res=await API.post("/user/signup",data);
    const {user,token}=res.data;
    console.log(user,token);
  }

  const submit=(e)=>{
    e.preventDefault();
    createUser(user);
  }
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
