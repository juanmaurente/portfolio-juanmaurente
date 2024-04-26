import styles from './Hamburguer.module.css';

interface Props {
	menuOpen: boolean;
	toggleMenu: () => void;
}

const Hamburguer = ({ menuOpen, toggleMenu }: Props) => {
	return (
		<button
			className={`${styles.hamburguer} ${menuOpen ? styles.open : ''}`}
			onClick={toggleMenu}>
			<span className={styles.hamburguerTop}></span>
			<span className={styles.hamburguerMiddle}></span>
			<span className={styles.hamburguerBottom}></span>
		</button>
	);
};

export default Hamburguer;
