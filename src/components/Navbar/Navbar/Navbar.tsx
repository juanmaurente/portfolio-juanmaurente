import styles from './Navbar.module.css';
import Hamburguer from '../Hamburguer/Hamburguer';
import FullPageMenu from '../FullPageMenu/FullPageMenu';
import { useRef, useState } from 'react';

interface Props {
	onNavigate: (sectionId: string) => void;
}

const Navbar = ({ onNavigate }: Props) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const boxRef = useRef<HTMLDivElement>(null);

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
					<li
						className={styles.navItem}
						onClick={() => onNavigate('home')}>
						Home
					</li>
					<li
						className={styles.navItem}
						onClick={() => onNavigate('about')}>
						About
					</li>
					<li
						className={styles.navItem}
						onClick={() => onNavigate('projects')}>
						Projects
					</li>
					<li
						className={styles.navItem}
						onClick={() => onNavigate('contact')}>
						Contact
					</li>
				</ul>
			</div>

			<FullPageMenu
				menuOpen={menuOpen}
				onNavigate={onNavigate}
				toggleMenu={toggleMenu}
			/>
		</>
	);
};

export default Navbar;
