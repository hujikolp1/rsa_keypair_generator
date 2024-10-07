// import React from 'https://cdn.skypack.dev/react';
import React from '../pkgs/react';
import ReactDOM from '../pkgs/react-dom';
import AutoGenKeys from './components/ui/autoGenKeys';
import DashBoard from './components/ui/dashBoard'; 
import './App.css'; 
import { useState } from '../pkgs/react';

function App() {
  const [keyVersion, setKeyVersion] = useState(0);

  const handleRegenerateKeys = () => {
    setKeyVersion(prevVersion => prevVersion + 1);
  };

  return (
    <div className="App">
      <DashBoard onRegenerateKeys={handleRegenerateKeys} />
      <AutoGenKeys key={keyVersion} handleRegenerateKeys={handleRegenerateKeys} />
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

export default App;
