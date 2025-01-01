import { useState } from "react";

const Counter=({sty})=>{
    const [count,setcount]=useState(0);
    const stl={backgroundColor:sty,marginRight:"5px",marginLeft:"5px"}

    const handle=(opt)=>{
        if(opt==="+"){
            setcount(count+1);
        } else{
            setcount(count-1);
        }
    };

    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={()=>handle("+")} style={stl}>Increment</button>
            <button onClick={()=>handle("-")} style={stl}>Decrement</button>
        </div>
    );
};

export default Counter;