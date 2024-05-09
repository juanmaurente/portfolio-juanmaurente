import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Project } from '../services/firebase';
import styles from './ProjectCard.module.css';
import ActionButton from '../Buttons/ActionButton/ActionButton';
import {
	faAws,
	faCss3Alt,
	faGithub,
	faHtml5,
	faJs,
	faReact,
	faSass,
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
	GITHUB: faGithub,
	AWS: faAws,
	SASS: faSass,
};

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
			<div className={styles.projectTitle}>
				<h3>{project.title}</h3>
			</div>
			<div className={styles.projectSkills}>
				{project.skills.map((skill) => {
					const icon = skillIconMap[skill];
					return (
						icon && (
							<FontAwesomeIcon
								icon={icon}
								size='lg'
								className={styles.skillIcon}
							/>
						)
					);
				})}
			</div>
			<div className={styles.projectButtons}>
				<ActionButton textOfButton='VIEW PROJECT' />

				<ActionButton textOfButton='VIEW CODE' />
			</div>
		</div>
	);
};

export default ProjectCard;
