import { useState } from 'react';

import './index.css';
import Navbar from './components/Navbar/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Navbar />
			<Hero />
		</>
	);
}

export default App;
