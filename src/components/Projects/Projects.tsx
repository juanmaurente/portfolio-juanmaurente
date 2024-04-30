import React, { useEffect, useState } from 'react';
import ContactButton from '../ContactButton/ContactButton';
import styles from './Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

interface Project {
	id: string;
	name: string;
	githubLink: string;
	siteLink: string;
	skills: string[];
}

const Projects = () => {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(collection(db, 'projects'));
			const projectsData = querySnapshot.docs.map((doc) => {
				const data = doc.data() as Project;
				return { id: doc.id, ...data }; // Asegúrate de que el id del documento prevalezca
			});
			setProjects(projectsData);
		};

		fetchData();
	}, []);

	return (
		<div>
			<div className='sectionHeader'>
				<h2>Projects</h2>
				<ContactButton />
			</div>
			<div className={styles.projectsContainer}>
				{projects.map((project) => (
					<div
						key={project.id}
						className={styles.projectItem}
						data-aos='fade-right'>
						<div className={styles.projectIMAGE}>
							{/* <picture>
								<source
									media='(min-width: 1440px)'
									srcSet={project.imageURL}
								/>
								<img
									src={
										project.imageURL ||
										'./assets/images/thumbnail-project-1-small.webp'
									}
									alt={`Thumbnail of ${project.name} Project`}
								/>
							</picture> */}
						</div>
						<div className={styles.projectTitle}>
							<h3>{project.name}</h3>
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
								href={project.siteLink}>
								VIEW PROJECT
							</a>
							<a
								className={styles.cardButton}
								href={project.githubLink}>
								VIEW CODE
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
