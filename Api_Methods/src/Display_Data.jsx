import React from 'react'
import "./Display_Data.css"

export const Display_Data = ({ title, fees, duration, id, ondelete,onupdate }) => {

    const update=()=>{
        onupdate({title, fees, duration, id,});
    };
    return (
        <>
                <div id='box'>
                    <h3>{title}</h3>
                    <p>Fees: {fees}</p>
                    <p>Duration: {duration} months</p>
                    <p>ID: {id}</p>
                    <button onClick={() => ondelete(id)}>Delete</button>&nbsp;&nbsp;&nbsp;
                    <button onClick={update}>Update</button>
                </div>
        </>
    );
};
