import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Inputs from './Pages/Inputs/Inputs';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inputs" element={<Inputs></Inputs>} />
      </Routes>
    </div>
  );
}

export default App;
