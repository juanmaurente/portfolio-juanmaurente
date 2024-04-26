import React, { useEffect } from 'react';
import styles from './FullPageMenu.module.css';
import { gsap } from 'gsap/gsap-core';

interface Props {
	menuOpen: boolean;
}

const FullPageMenu = ({ menuOpen }: Props) => {
	const menuClass = menuOpen ? styles.menuOpen : styles.menu;

	useEffect(() => {
		if (menuOpen) {
			const tl = gsap.timeline();
			tl.fromTo(
				`.${styles.mainMenuItem}`,
				{
					scale: 0.6,
					x: '100%',
					opacity: 0,
				},
				{
					duration: 0.6,
					scale: 1,
					x: 0,
					opacity: 1,
					stagger: 0.2,
				},
			);
		}
	}, [menuOpen]);

	return (
		<>
			<section className={menuClass}>
				<div className={styles.menuInner}>
					<ul className={styles.mainMenu}>
						<li className={styles.mainMenuItem}>
							<a href='#'>Home</a>
						</li>
						<li className={styles.mainMenuItem}>
							<a href='#'>About</a>
						</li>
						<li className={styles.mainMenuItem}>
							<a href='#'>Projects</a>
						</li>
						<li className={styles.mainMenuItem}>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default FullPageMenu;
