import React, { useEffect, useState } from 'react';
import ContactButton from '../Buttons/ContactButton/ContactButton';
import styles from './Projects.module.css';
import { db, getProjects, Project } from '../services/firebase';
import ProjectCard from '../ProjectCard/ProjectCard';

interface Props {
	id: string;
}
const Projects = ({ id }: Props) => {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const fetchedProjects = await getProjects(db);
				setProjects(fetchedProjects);
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchProjects();
	}, []);

	return (
		<div id={id}>
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
