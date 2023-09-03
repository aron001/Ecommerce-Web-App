import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';
import { LoginPage } from './routes/Routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes> 
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
