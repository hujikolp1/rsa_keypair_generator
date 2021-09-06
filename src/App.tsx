import React from 'react';
import AutoGenKeys from './components/autoGenKeys';
import DashBoard from './components/dashBoard'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      
      <DashBoard></DashBoard>

      <AutoGenKeys></AutoGenKeys>
      
    </div>
  );
}

export default App;
