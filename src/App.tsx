import { useEffect, useState } from 'react';

import './index.css';
import Navbar from './components/Navbar/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import WelcomeAnimation from './components/AnimationWelcome/AnimationWelcome';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 4000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div>
				{loading ? (
					<WelcomeAnimation />
				) : (
					<div className='container'>
						<Navbar />
						<Hero />
						<About />
					</div>
				)}
			</div>
		</>
	);
}

export default App;
