import React from 'react';
import './App.css';

import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Text from './Text';

import { useState } from 'react';



function App() {
  const[mode,setMode]=useState("light")
  
    const togglemode = () =>{
      if(mode === "light"){
        setMode("dark")
        document.body.style.backgroundColor="black"
       
        document.title="Text converter-Dark mode"
       setInterval(() => {
        document.title="Text converter-Dark mode"
       }, 1500);
      }
      else{
        setMode("light")
        document.body.style.backgroundColor="white"
        
        document.title="Text converter-Light mode"
        setInterval(() => {
          document.title="Text converter-Light mode"
         }, 1500);
      }
    }

  return (

   
   <div className='container my-3'>
      <Header mode={mode} togglemode={togglemode}/><br/> 
      <Text title="enter your text here to analyze"/> 
        
        </div>

  )
}

export default App;
