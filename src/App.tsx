import { useEffect, useRef, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import WelcomeAnimation from './components/AnimationWelcome/AnimationWelcome';
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactFrom/ContactForm';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
	const [loading, setLoading] = useState(true);
	const containerRef = useRef(null);

	const handleNavigate = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div>
				{loading ? (
					<WelcomeAnimation />
				) : (
					<>
						<Navbar onNavigate={handleNavigate} />
						<div ref={containerRef}>
							<Hero id='home' />
							<About id='about' />
							<Projects id='projects' />
							<ContactForm id='contact' />
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default App;
