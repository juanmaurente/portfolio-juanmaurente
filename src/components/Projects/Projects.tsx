import React, { useEffect, useState } from 'react';
import ContactButton from '../Buttons/ContactButton/ContactButton';
import styles from './Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { db, getProjects, Project } from '../services/firebase';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		const fetchProjects = async () => {
			const fetchProjects = await getProjects(db); // Usa la función getProjects importada o definida
			setProjects(fetchProjects);
		};

		fetchProjects();
	}, []);
	return (
		<div id='projects'>
			<div className='sectionHeader'>
				<h2>Projects</h2>
				<ContactButton />
			</div>
			<div className={styles.projectsContainer}>
				{projects.map((project) => (
					<ProjectCard project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
