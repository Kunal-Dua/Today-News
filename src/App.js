// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js'
import News from './Components/News'
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="#030d7e";
      console.log("dark mode enabled");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor="white";
      console.log("light mode enabled");
    }
  }

  return (
    <div className="App">
      <Navbar title="Horizon Media" mode={mode} toggleMode={toggleMode} />
      <News country={"in"} category = {"general"}/>
    </div>
  );
}

export default App;
