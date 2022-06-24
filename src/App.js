import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js'
import Heading from './Components/Heading';
import NewsItem from './Components/NewsItem'
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
      <Navbar title="News Today" mode={mode} toggleMode={toggleMode} />
      <Heading heading="News Today" mode={mode}/>
      <NewsItem/>
    </div>
  );
}

export default App;
