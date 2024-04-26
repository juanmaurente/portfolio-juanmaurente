import { useState } from 'react';

import './index.css';
import Navbar from './components/Navbar/Navbar/Navbar';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Navbar />
			<h1>Hello World</h1>;
		</>
	);
}

export default App;
