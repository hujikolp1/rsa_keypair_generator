// import React from 'https://cdn.skypack.dev/react';
import React from '../pkgs/react';
import ReactDOM from '../pkgs/react-dom';
import AutoGenKeys from './components/ui/autoGenKeys';
import DashBoard from './components/ui/dashBoard'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      
      <DashBoard></DashBoard>
      <AutoGenKeys></AutoGenKeys>
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
