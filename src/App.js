// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import News from './Components/News';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [ mode, setMode ] = useState('light');

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#000544';
			console.log('dark mode enabled');
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			console.log('light mode enabled');
		}
	};

	return (
		<div className="App">
			<Navbar title="Horizon Media" mode={mode} toggleMode={toggleMode} />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<News country={'in'} category={'general'} />} />
					<Route path="/business" element={<News country={'in'} category={'business'} />} />
					<Route path="/entertainment" element={<News country={'in'} category={'entertainment'} />} />
					<Route path="/health" element={<News country={'in'} category={'health'} />} />
					<Route path="/science" element={<News country={'in'} category={'science'} />} />
					<Route path="/science" element={<News country={'in'} category={'sports'} />} />
					<Route path="/technology" element={<News country={'in'} category={'technology'} />} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
