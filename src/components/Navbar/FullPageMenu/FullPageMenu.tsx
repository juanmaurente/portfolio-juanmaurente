import { useEffect, useRef } from 'react';
import styles from './FullPageMenu.module.css';
import { gsap } from 'gsap/gsap-core';

interface Props {
	menuOpen: boolean;
	onNavigate: (sectionId: string) => void;
	toggleMenu: () => void;
}

const FullPageMenu = ({ menuOpen, onNavigate, toggleMenu }: Props) => {
	const menuClass = menuOpen ? styles.menuOpen : styles.menu;

	const handleNavigation = (sectionId: string) => {
		onNavigate(sectionId);
		toggleMenu();
	};

	return (
		<>
			<section className={menuClass}>
				<div className={styles.menuInner}>
					<ul className={styles.mainMenu}>
						<ul className={styles.mainMenu}>
							<li
								className={styles.mainMenuItem}
								onClick={() => handleNavigation('home')}>
								Home
							</li>
							<li
								className={styles.mainMenuItem}
								onClick={() => handleNavigation('about')}>
								About
							</li>
							<li
								className={styles.mainMenuItem}
								onClick={() => handleNavigation('projects')}>
								Projects
							</li>
							<li
								className={styles.mainMenuItem}
								onClick={() => handleNavigation('contact')}>
								Contact
							</li>
						</ul>
					</ul>
				</div>
			</section>
		</>
	);
};

export default FullPageMenu;
