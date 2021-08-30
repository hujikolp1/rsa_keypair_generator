import React from 'react';
import AutoGenKeys from './components/autoGenKeys';
import DashBoard from './components/dashBoard'; 
import Encryption from './components/encryption'; 
import Decryption from './components/decryption';
import './App.css'; 

function App() {
  return (
    <div className="App">
      
      <DashBoard></DashBoard>

      <AutoGenKeys></AutoGenKeys>

      <Encryption></Encryption>

      <Decryption></Decryption>
      
    </div>
  );
}

export default App;
