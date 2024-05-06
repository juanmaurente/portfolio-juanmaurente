import { useEffect, useState } from 'react';

import './index.css';
import Navbar from './components/Navbar/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import WelcomeAnimation from './components/AnimationWelcome/AnimationWelcome';
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactFrom/ContactForm';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div>
				{loading ? (
					<WelcomeAnimation />
				) : (
					<>
						<div className='container'>
							<Navbar />
							<Hero />
							<About />
							<Projects />
						</div>
						<div>
							<ContactForm />
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default App;
