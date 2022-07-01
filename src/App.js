import './App.css';
import Navbar from './Components/Navbar.js';
import News from './Components/News';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
	const [ mode, setMode ] = useState('light');
	const [country, setCountry] = useState('in');
	const [countryBool, setcountryBool] = useState(false)

	const changeCountry=()=>{
		countryBool===false?setcountryBool(true):setcountryBool(false);
		country === 'in' ? setCountry('us') : setCountry('in');
		// console.log("in change country function "+country);
		// console.log("in change countryBool "+countryBool);
		// console.log("rendering...");
	}

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
		<>
		<div className="App">
			<Router>
			<Navbar title="Horizon Media" mode={mode} toggleMode={toggleMode} country={country} newCountry={changeCountry}/>
				<Routes>
					<Route exact path="/" element={<News country={country} category={'general'} pageSize={9} countryBool={countryBool}/>} />
					<Route exact path="/business" element={<News country={country} category={'business'} pageSize={9} countryBool={countryBool}/>} />
					<Route exact path="/entertainment" element={<News country={country} category={'entertainment'} pageSize={9} countryBool={countryBool}/>} />
					<Route exact path="/health" element={<News country={country} category={'health'} pageSize={9} countryBool={countryBool}/>} />
					<Route exact path="/science" element={<News country={country} category={'science'} pageSize={9} countryBool={countryBool}/>} />
					<Route exact path="/sports" element={<News country={country} category={'sports'} pageSize={9} countryBool={countryBool}/>} />
					<Route exact path="/technology" element={<News country={country} category={'technology'} pageSize={9} countryBool={countryBool}/>} />
				</Routes>
			</Router>
		</div>
		</>
	);
}

export default App;
