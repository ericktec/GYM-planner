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
import ExerciseList from './Pages/ExerciseList/ExerciseList';
import Exercise from './Pages/Exercise/Exercise';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inputs" element={<Inputs></Inputs>} />
        <Route path="/timer" element={<Timer time={10} />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/test" element={<Test />} />
        <Route path="/todays-workout" element={<TodaysWorkout />} />
        <Route path="/workout/exercise-list" element={<ExerciseList />} />
        <Route path="/workout/exercise-list/exercise" element={<Exercise />} />
      </Routes>
    </div>
  );
}

export default App;
