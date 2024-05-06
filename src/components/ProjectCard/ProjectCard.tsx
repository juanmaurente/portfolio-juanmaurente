import React from 'react';
import { Project } from '../services/firebase';
import styles from './ProjectCard.module.css';
import ActionButton from '../Buttons/ActionButton/ActionButton';

interface Props {
	project: Project;
}

const ProjectCard = ({ project }: Props) => {
	return (
		<div className={styles.projectItem}>
			<div className={styles.projectImage}>
				<picture>
					<source
						media='(min-width: 1440px)'
						srcSet={project.imgLink}
					/>

					<img src={project.imgLink} alt='' />
				</picture>
			</div>
			<div className='projectTitle'>
				<h3>{project.title}</h3>
			</div>
			{/* <div className='projectSkills'>
				<p>
					HTML <i className='fa-brands fa-html5'></i>
				</p>
				<p>
					CSS <i className='fa-brands fa-css3-alt'></i>
				</p>
			</div> */}

			<div className={styles.projectButtons}>
				<ActionButton textOfButton='VIEW PROJECT' />
				{/* <button className='cardButton'>
					<a href={project.siteLink}>VIEW PROJECT</a>
				</button> */}
				<ActionButton textOfButton='VIEW CODE' />
				{/* <button className='cardButton'>
					<a href={project.githubRepo}>VIEW CODE</a>
				</button> */}
			</div>
		</div>
	);
};

export default ProjectCard;
