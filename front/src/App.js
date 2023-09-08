import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ActivationPage,
  LoginPage,
  SignupPage,
} from "./routes/Routes.js";

class App extends Component {
  render() {
    return (
      
      
      <BrowserRouter>
      <Routes> 
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
      <Routes> 
        <Route path='/signup' element={<SignupPage/>}/>
        
      </Routes>
      <Routes> 
        <Route path='/activation/:activation_token' element={<ActivationPage/>}/>
        
      </Routes>
      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

      </BrowserRouter>
    );
  }
}

export default App;
