import { useState } from 'react';

import './index.css';
import Navbar from './components/Navbar/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<div className='container'>
				<Navbar />
				<Hero />
				<About />
			</div>
		</>
	);
}

export default App;
