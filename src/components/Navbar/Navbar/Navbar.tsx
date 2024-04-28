import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import Hamburguer from '../Hamburguer/Hamburguer';
import FullPageMenu from '../FullPageMenu/FullPageMenu';
import { gsap } from 'gsap/gsap-core';

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
			<div>
				<div
					ref={boxRef}
					className={`${styles.nav} ${styles.container}`}>
					<div className={styles.logo}>
						<h2 className={styles.logoThick}>Juan</h2>
						<h2 className={styles.logoThin}>Maurente</h2>
					</div>

					<Hamburguer menuOpen={menuOpen} toggleMenu={toggleMenu} />

					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<a href='#'>Home</a>
						</li>
						<li className={styles.navItem}>
							<a href='#'>About</a>
						</li>
						<li className={styles.navItem}>
							<a href='#'>Projects</a>
						</li>
						<li className={styles.navItem}>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<FullPageMenu menuOpen={menuOpen} />
		</>
	);
};

export default Navbar;
