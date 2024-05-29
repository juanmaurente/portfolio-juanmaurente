import styles from './About.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
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
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Skills: SkillIconMap = {
	HTML: faHtml5,
	CSS: faCss3Alt,
	JavaScript: faJs,
	React: faReact,
	SASS: faSass,
	Java: faJava,
	Github: faGithub,
	WordPress: faWordpress,
	Webflow: faWebflow,
	AWS: faAws,
	Google: faGoogle,
};

interface SkillIconMap {
	[key: string]: IconDefinition;
}

interface Props {
	id: string;
}

const About = ({ id }: Props) => {
	const renderSkills = (skillMap: SkillIconMap) => (
		<div className={styles.skillsGrid}>
			{Object.entries(skillMap).map(([skill, icon]) => (
				<div key={skill} className={styles.skill}>
					<FontAwesomeIcon
						className={styles.skillIcon}
						icon={icon}
						size='3x'
					/>
					<span>{skill}</span>
				</div>
			))}
		</div>
	);

	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		// gsap code here...

		gsap.from('.aboutContainer', {
			scrollTrigger: {
				trigger: '.aboutContainer',
				start: 'top 60%',
				end: 'top 100px',
				markers: false,
			},
			y: -20,
			duration: 2,
			opacity: 0,
		});
	});

	return (
		<section id={id} className={`aboutContainer ${styles.about}`}>
			<div className='sectionHeader'>
				<h2>About</h2>
			</div>
			<div className={styles.aboutText}>
				<p>
					👋 Hola! I'm Juan, a Junior{' '}
					<span className={styles.textHighlited}>
						Full-Stack Developer
					</span>{' '}
					in Sydney, passionate about building{' '}
					<span className={styles.textHighlited}>
						modern, clean and responsive
					</span>{' '}
					web applications through innovative technology.
				</p>
				<p>Some of the techs I love working with are:</p>
				{renderSkills(Skills)}
				<p>Let's create something amazing together!</p>
			</div>
		</section>
	);
};

export default About;
