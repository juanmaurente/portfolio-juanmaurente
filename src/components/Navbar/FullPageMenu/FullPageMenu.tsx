import { useEffect, useRef } from 'react';
import styles from './FullPageMenu.module.css';
import { gsap } from 'gsap/gsap-core';

interface Props {
	menuOpen: boolean;
}

const FullPageMenu = ({ menuOpen }: Props) => {
	const menuClass = menuOpen ? styles.menuOpen : styles.menu;

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
