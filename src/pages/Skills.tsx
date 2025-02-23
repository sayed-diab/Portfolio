import '../styles/skills.css';
import { motion } from 'framer-motion';

const Skills = () => {
  const development = ['Html-5.svg', 'Css-3.svg', 'Javascript.svg', 'Typescript.svg'];
  const frameworksAndLibraries = ['Bootstrap.svg', 'React.js.svg', 'Tailwindcss.svg', 'Redux-toolkit.svg', 'Ant-design.svg', 'Motion.svg'];
  const vAndG = ['Git.svg', 'Github.svg'];
  const db = ['Firebase.svg'];
  const bt = ['vite.svg'];
  const dg = ['Adobe Photoshop.svg', 'Adobe illustrator.svg', 'Figma.svg'];
  const SkillsComponent = (props: { icons: string[]; title: string; duration: number }) => {
    return (
      <>
        <div className="skills-box">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: props.duration, duration: 0.8, ease: 'easeOut' }} // Triggers when 50% visible
            viewport={{ once: true, amount: 0.7 }}
          >
            <h4>
              {props.title} <span>:</span>
            </h4>
            <div className="icon-skills">
              {props.icons.map((icon) => (
                <img
                  className="icon-skill"
                  src={`./assets/skills/${icon}`}
                  alt={icon}
                  key={icon}
                  loading="lazy"
                  title={icon.replace(/.(svg|png)$/, '')}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </>
    );
  };
  return (
    <section
      className="skills"
      id="skills"
    >
      <h1 className="title-section">
        <span>Skills</span> :
      </h1>
      <div className="skills-grid">
        <SkillsComponent
          icons={development}
          title="Development"
          duration={0.5}
        />
        <SkillsComponent
          icons={frameworksAndLibraries}
          title="Frameworks & Libraries"
          duration={0.5}
        />
        <SkillsComponent
          icons={vAndG}
          title="Version Control & Git"
          duration={0.8}
        />
        <SkillsComponent
          icons={db}
          title="Database"
          duration={0.8}
        />
        <SkillsComponent
          icons={bt}
          title="Build Tools"
          duration={1.1}
        />
        <SkillsComponent
          icons={dg}
          title="Design"
          duration={1.1}
        />
      </div>
    </section>
  );
};

export default Skills;
