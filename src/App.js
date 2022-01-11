import React from 'react';
import './App.scss';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div>
      <Timer time={10} />
    </div>
  );
}

export default App;
