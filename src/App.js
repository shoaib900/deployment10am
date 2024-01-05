import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [warn,setWarn] = useState("")

  const incValue =() =>{
    setValue(value + 1)
    console.log(value)
  }

  const decValue=()=> {
    if(value === 0){
      setValue(0);
      setWarn("your value can't be -ive")
      console.log("your value can't be -ive")
    }else{
      setValue(value -1 )
      setWarn("")
    }
  }
  return (
    <div>
      <button onClick={incValue}>next value</button>
      <h1> hello world - {value} </h1>
      <h1 style={{color:"red"}}>{warn}</h1>
      <button onClick={decValue}> prev Value</button>
      <button onClick={()=> setValue(0)}> default Value</button>

    </div>
  );
};

export default App;
