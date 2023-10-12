

import './App.css';
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import  { useState } from'react';
import Alert from './components/Alert';
import TextCaseSpeake from './components/TextCaseSpeake';
import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {
const [mode , setMode] = useState("light")
const [label , setLabel] = useState("Enable Dark Mode")
const [alert , setAlert] = useState("null")

const ShowAlert = (message, type) => {
  setAlert({
   message : message,
    type : type
  } )
  setTimeout(() => {
    setAlert("null");
  }, 2000)
}

const ToggleMode = () =>{
  if(mode === "light"){
    setMode("dark")
    setLabel("Enable Light Mode")
    ShowAlert(": Dark Mode has been enabled" , "success")
    document.body.style.backgroundColor = "#042743"
    document.title = "TextCaseSpeak-Dark Mode"
  }else{
    setMode("light")
    setLabel("Enable Dark Mode")
    ShowAlert(": Light Mode has been enabled" , "success")
    document.body.style.backgroundColor = "white"
    document.title = "TextCaseSpeak-Light Mode"
  }
}


  return (

 <>

<Navbar name= "TextCaseSpeake"  about = "About" mode = {mode} ToggleMode = {ToggleMode}label = {label}  />
 <Alert alert = {alert} />

 <BrowserRouter>
      <Routes>
      <Route  exact path="TextCaseSpeake" element={<TextCaseSpeake/> } />
          <Route exact path="home" element={ <TextForm heading = "Enter the Text  to Apply some Operation:" change = {mode} ShowAlert = {ShowAlert} />} />
          
          <Route  exact path="about" element={ <About mode ={mode} />} />
         
        
      </Routes>
    </BrowserRouter>
 </> 
 
);
}
export default App;
