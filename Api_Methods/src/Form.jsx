import React, { useState } from 'react'
import API from './Config/Api';
import "./Form.css"

export const Form = () => {

    const [course, setcourse] = useState({ title: "", fees: "", duration: "" });

    const handleinuptchange = (e) => {
        const { name, value } = e.target;
        setcourse({ ...course, [name]: value });
    };

    const createCourse = async()=>{
        let res=await API.post("/courses",course);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createCourse();
        setcourse({ title: "", fees: "", duration: "" });
    };
    return (
        <>
            <form onSubmit={handleSubmit} id='data'>
                <input type="text" id='title' className='input' placeholder="Enter Course Name" name="title" value={course.title} onChange={handleinuptchange}/><br /><br />
                <input type="number" id='fees' className='input' placeholder="Enter Course Fees" name="fees" value={course.fees} onChange={handleinuptchange} /><br /><br />
                <input type="number" id='duration' className='input' placeholder="Enter Course Duration" name="duration" value={course.duration} onChange={handleinuptchange} /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};
