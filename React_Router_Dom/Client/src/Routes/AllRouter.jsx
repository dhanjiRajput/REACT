import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Assign from '../Pages/Assign';
import Login from '../Pages/Login';
import { Signup } from '../Pages/Signup';
import Private from './Private';

export const AllRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Private><Home /></Private>}></Route>
      <Route path='/assign' element={<Private><Assign /></Private>}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
    </Routes>
  );
};
export default AllRouter;