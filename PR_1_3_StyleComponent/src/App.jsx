import StyledComponent from './StyledComponent';
import { useState } from "react";
import "./App.css"

const App=()=>{
  const [a,b]=useState(false);

  const css=()=>{
    b(!a);
  };

  return (
    <>
      <button onClick={css} id='button'>
        {a? "Remove Style" : "Add Style"}
      </button>

      <StyledComponent a={a}/>
    </>
  );
};
export default App;