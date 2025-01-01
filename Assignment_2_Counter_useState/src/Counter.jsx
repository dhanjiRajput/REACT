import React, { useState } from "react";
const Counter = () => {

    const [count, setCount] = React.useState(0);

    const handle=(opt)=>{
        if(opt=="+"){
            setCount(count+1);
        }else{
            setCount(count-1);
        }
    };

  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={()=>handle("+")}>
        Increment
        </button>
        <button onClick={()=>handle("-")} style={{marginLeft:"10px"}}>
        Decrement
        </button>
    </div>
  );
};

export default Counter;