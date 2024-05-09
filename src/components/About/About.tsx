import styles from './About.module.css';

const About = () => {
	return (
		<section id='about' className={`${styles.about}`}>
			<div className={styles.aboutText}>
				<p>
					👋 Hola! I'm Juan, a Junior Full-Stack Developer based in
					Sydney. With a passion for technology and innovation, I have
					spent the last two years honing my skills in web
					development. I specialize in creating modern and responsive
					web applications.
				</p>

				<div className={styles.aboutSkills}>
					<p>My technical toolkit includes:</p>
					<ul>
						<li className={styles.skillsItem}>
							<span>Frontend Technologies:</span> HTML, CSS,
							JavaScript, and React.js
						</li>
						<li className={styles.skillsItem}>
							<span>Backend Technologies:</span> Java and Spring
							Boot
						</li>
						<li className={styles.skillsItem}>
							<span>Web Platforms:</span> Webflow and WordPress
						</li>
						<li className={styles.skillsItem}>
							<span>Cloud Services:</span> Google Cloud Platform
							(GCP) and Amazon Web Services (AWS)
						</li>
					</ul>
				</div>
				<p>
					I am committed to building websites that are also SEO
					optimized to ensure the best online visibility. I pride
					myself on my ability to work face-to-face with my clients,
					ensuring that all their requirements are meticulously met
					and exceeded. Whether you're looking to build a brand new
					website or revamp an existing one, I am here to help you
					navigate the digital landscape with ease and confidence.
					Let's create something amazing together!
				</p>
			</div>
		</section>
	);
};

export default About;
