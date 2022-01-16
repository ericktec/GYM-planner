import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Inputs from './Pages/Inputs/Inputs';
import Timer from './components/Timer/Timer';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Test from './Pages/Test/Test';
import TodaysWorkout from './Pages/TodaysWorkout/TodaysWorkout';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>

      <Routes>
        {/* Routes without navbar */}
        <Route path="/" element={<Home />} />
        <Route path="/inputs" element={<Inputs></Inputs>} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <NavBar className="width-90 margin-auto" />
      <Routes>
        {/* Routes with navbar */}
        <Route path="/test" element={<Test />} />
        <Route path="/todays-workout" element={<TodaysWorkout />} />
      </Routes>
    </div>
  );
}

export default App;
