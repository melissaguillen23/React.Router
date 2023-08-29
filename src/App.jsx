import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

function App() {

  return (
          <div className='App'>
            <Navbar />
            <MainContainer />
          </div>
  )
}

export default App
