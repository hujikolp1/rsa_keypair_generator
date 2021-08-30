import React from 'react';
import AutoGenKeys from './components/autoGenKeys';
import DashBoard from './components/dashBoard'; 
import Encryption from './components/encryption'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      
      <DashBoard></DashBoard>

      <AutoGenKeys></AutoGenKeys>

      <Encryption></Encryption>
      
    </div>
  );
}

export default App;
