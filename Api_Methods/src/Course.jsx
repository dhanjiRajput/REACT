import React, { useEffect, useState } from 'react'
import API from './Config/Api';
import { Display_Data } from './Display_Data';

export const Course = () => {

    const [data,setdata]=useState([]);

  const getCourse=async()=>{
    let res=await API.get("/courses");
    setdata(res.data);
  };

  const deleteCourse=async(id)=>{
    let res=await API.delete(`/courses/${id}`);
    getCourse();
  };

  useEffect(()=>{
    getCourse();
  },[deleteCourse]);

  return (
    <>
      <div id="main">
        {data.map((ele)=>(
            <Display_Data key={ele.id} {...ele} ondelete={deleteCourse}/>
        ))}
        
      </div>
    </>
  );
};
