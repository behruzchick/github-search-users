import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Result from './Components/Result';
import { Route, Routes } from 'react-router-dom';
import User from './Components/User';

function App() {

  return (
    <div className="wrappe">
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/user/:name' element={<User/>} />
      </Routes>
    </div>
  );
}

export default App;
