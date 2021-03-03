import React from 'react';
import PrimeGen from './components/primeGen'
import DashBoard from './components/dashBoard'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <DashBoard></DashBoard>

      <PrimeGen></PrimeGen>
      
    </div>
  );
}

export default App;
