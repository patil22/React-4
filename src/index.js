// import React, { useState }  from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Components/Navbar';
// import './index.css';
// import './App.css';
// import reportWebVitals from './reportWebVitals';
// import Textform from './Components/Textform';
// import Homepage from './Pages/Homepage'

// import Sidebar from './Components/Sidebar'
// import  Contactus from './Pages/Contactus'
// import Gaurav from './Pages/Gaurav';
// import Text from './Pages/Text';
// import Accordian from './Pages/Accordian';
// import Formvalidation from './Pages/Formvalidation'
// import Api from './Pages/Api.js'
// import Crud from './Pages/Crud'

// const configRouting = (


//   <Router>



//     <Navbar title="Gaurav" home="home" />
    
//     <div className="container my-3   ">
//       <Textform heading="Enter text ..." />
//     </div>
//      <Sidebar />  

//     <Routes>
//       <Route path="/" element={< Homepage />} />
//      <Route path="/Contactus" element={<Contactus />} /> 
//      <Route path = "/Gaurav" element = {< Gaurav />} />
//     <Route path = "/Text" element = {<Text/>}/>
//     <Route path = "/Accordian" element = {<Accordian/>}/>
//     <Route path = "/Formvalidation" element = {< Formvalidation/>}/>
//     <Route path = "/Api" element = {<Api/>}/>
//     <Route path = "/Crud" element = {<Crud/>}/>
//     </Routes> 


//   </Router>  
// );

import React from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './App.css';
 import './index.css';
//  import App from './App'
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

 import Home from './Pages/Home'
 import About from "./Pages/About";
 import Register from "./Pages/Register"
 import Contact from "./Pages/Contact"
 import Login from "./Pages/Login"
 import Dashboard from './Pages/Dashboard'

const configRouting =(

  <Router>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      
   <Route path = "/Register" element = {<Register/>}/>

  <Route path = "/Login" element = {<Login/>}/>
  <Route path = "/Dashboard" element = {<Dashboard/>}/>


  
  <Route path = '/About' element = {<About/>}/>
  <Route path = "/Contact" element = {<Contact/>}/>
  

 

  
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   configRouting

  //<App/>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
