import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Assign from '../Pages/Assign';
import Login from '../Pages/Login';
import { Signup } from '../Pages/Signup';

export const AllRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/assign' element={<Assign/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
    </Routes>
  );
};
export default AllRouter;