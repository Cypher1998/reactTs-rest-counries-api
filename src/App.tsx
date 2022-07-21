import './App.css';
import { ThemeProvider } from './context/themecontext/themeContext';
import { CountryProvider } from './context/countriescontext/countriesContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CountryInfo from './pages/CountryInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<ThemeProvider>
			<CountryProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/name/:country" element={<CountryInfo />} />
						<Route path="/alpha/:country" element={<CountryInfo />} />
					</Routes>
				</Router>
			</CountryProvider>
		</ThemeProvider>
	);
}

export default App;
