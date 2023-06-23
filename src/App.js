
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Transform from './components/Transform';
import Alert from './components/Alert';
import React from "react";


function App() {
  const[mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  const showalert =(message,type)=>{
    setAlert({
    msg:message,
    type:type
  })
  setTimeout (()=>{
    setAlert(null)},1500)

  }
  const togglemode =()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#04315e"
      showalert("dark mode is enabled","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showalert("light mode is e4nabled","success");
    }
    
  }
  return (
    <>
<Navbar title="Textutlis" about ="about" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Transform heading="Try textutils-clear text,convert to upper and lower case" mode={mode} showalert={showalert}/>
</div>
    </>
  );
}

export default App;
