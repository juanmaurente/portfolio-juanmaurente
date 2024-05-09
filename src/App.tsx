import { useEffect, useState } from 'react';
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

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<BrowserRouter>
			<div>
				{loading ? (
					<WelcomeAnimation />
				) : (
					<>
						<Navbar />
						<Routes>
							<Route path='/home' element={<Hero />} />
							<Route path='/about' element={<About />} />
							<Route path='/projects' element={<Projects />} />
							<Route path='/contact' element={<ContactForm />} />
							<Route
								path='/'
								element={<Navigate to='/home' replace />}
							/>
						</Routes>
					</>
				)}
			</div>
		</BrowserRouter>
	);
}

export default App;
