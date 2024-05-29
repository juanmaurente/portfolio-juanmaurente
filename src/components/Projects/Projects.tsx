import React, { useEffect, useLayoutEffect, useState } from 'react';
import ContactButton from '../Buttons/ContactButton/ContactButton';
import styles from './Projects.module.css';
import { db, getProjects, Project } from '../services/firebase';
import ProjectCard from '../ProjectCard/ProjectCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Props {
	id: string;
}
const Projects = ({ id }: Props) => {
	const [projects, setProjects] = useState<Project[]>([]);

	useLayoutEffect(() => {
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

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'.projectCard',
			{
				opacity: 0,
				x: -50,
			},
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: '.projectCard',
					start: 'top 80%',
					end: 'top 100px',
					markers: false,
				},
				stagger: 0.5,
				duration: 1,
			},
		);
	}, [projects]); // Ensure this effect runs again when 'projects' state changes

	return (
		<div id={id}>
			<div className='sectionHeader'>
				<h2>Projects</h2>
				<ContactButton />
			</div>
			<div className={styles.projectsContainer}>
				{projects.map((project) => (
					<div className='projectCard'>
						<ProjectCard project={project} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
