// ProjectCard component
import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Project } from '../services/firebase';
import styles from './ProjectCard.module.css';
import ActionButton from '../Buttons/ActionButton/ActionButton';
import {
	faAws,
	faCss3Alt,
	faGithub,
	faGoogle,
	faHtml5,
	faJs,
	faReact,
	faSass,
	faJava,
	faWordpress,
	faWebflow,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SkillIconMap {
	[key: string]: IconDefinition;
}

interface Props {
	project: Project;
}

const skillIconMap: SkillIconMap = {
	HTML: faHtml5,
	CSS: faCss3Alt,
	JAVASCRIPT: faJs,
	REACT: faReact,
	SASS: faSass,
	JAVA: faJava,
	GITHUB: faGithub,
	WORDPRESS: faWordpress,
	Webflow: faWebflow,
	AWS: faAws,
	GOOGLE: faGoogle,
};

const ProjectCard = ({ project }: Props) => {
	return (
		<div className={`projectItem ${styles.projectItem}`}>
			<div className={styles.projectImage}>
				<picture>
					<source
						media='(min-width: 1440px)'
						srcSet={project.imgLink}
					/>
					<img src={project.imgLink} alt={project.title} />
				</picture>
			</div>
			<div className={styles.projectTitle}>
				<h3>{project.title}</h3>
			</div>
			<div className={styles.projectSkills}>
				{project.skills.map((skill, index) => {
					const icon = skillIconMap[skill.toUpperCase()];
					return (
						icon && (
							<FontAwesomeIcon
								key={index}
								icon={icon}
								size='lg'
								className={styles.skillIcon}
							/>
						)
					);
				})}
			</div>
			<div className={styles.projectButtons}>
				<ActionButton
					textOfButton='VIEW PROJECT'
					href={project.siteLink}
				/>
				<ActionButton
					textOfButton='VIEW CODE'
					href={project.githubRepo}
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
