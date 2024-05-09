import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import Hamburguer from '../Hamburguer/Hamburguer';
import FullPageMenu from '../FullPageMenu/FullPageMenu';
import { gsap } from 'gsap/gsap-core';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const boxRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		gsap.fromTo(
			boxRef.current,
			{
				y: '-10px',
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				delay: 2.5,
				duration: 0.5,
			},
		);
	}, []);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<div ref={boxRef} className={`${styles.nav} ${styles.container}`}>
				<div className={styles.logo}>
					<h2 className={styles.logoThick}>Juan</h2>
					<h2 className={styles.logoThin}>Maurente</h2>
				</div>

				<Hamburguer menuOpen={menuOpen} toggleMenu={toggleMenu} />

				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link to='/home'>Home</Link>
					</li>
					<li className={styles.navItem}>
						<Link to='/about'>About</Link>
					</li>
					<li className={styles.navItem}>
						<Link to='/projects'>Projects</Link>
					</li>
					<li className={styles.navItem}>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>

			<FullPageMenu menuOpen={menuOpen} />
		</>
	);
};

export default Navbar;
