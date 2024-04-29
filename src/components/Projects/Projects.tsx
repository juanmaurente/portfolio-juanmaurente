import React from 'react';
import ContactButton from '../ContactButton/ContactButton';
import mosh from '../../assets/thumbnail-project-1-small.webp';
import styles from './Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
	return (
		<div>
			{' '}
			{/* Elimina el fragmento innecesario y usa un <div> para envolver todo si es necesario */}
			<div className='sectionHeader'>
				<h2>Projects</h2>
				<ContactButton />
			</div>
			<div className={styles.projectsContainer}>
				<div className={styles.projectItem} data-aos='fade-right'>
					<div className={styles.projectIMAGE}>
						<picture>
							<source media='(min-width: 1440px)' srcSet={mosh} />
							<img
								src='./assets/images/thumbnail-project-1-small.webp'
								alt='Thumbnail of Moshify Project'
							/>
						</picture>
					</div>
					<div className={styles.projectTitle}>
						<h3>MOSHIFY PAGE</h3>
					</div>
					<div className={styles.projectSkills}>
						<p>
							HTML <FontAwesomeIcon icon={faHtml5} />
						</p>
						<p>
							CSS <FontAwesomeIcon icon={faCss3Alt} />
						</p>
					</div>

					<div className={styles.projectButtons}>
						<a
							className={styles.cardButton}
							href='https://juanmaurente-moshify.netlify.app/'>
							VIEW PROJECT
						</a>
						<a
							className={styles.cardButton}
							href='https://github.com/juanmaurente/moshify'>
							VIEW CODE
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
