import '../styles/skills.css';
const Skills = () => {
  const development = ['Html-5.svg', 'Css-3.svg', 'Javascript.png', 'Typescript.png'];
  const frameworksAndLibraries = ['Bootstrap.svg', 'React.js.png', 'Tailwindcss.png', 'Redux-toolkit.svg', 'Ant-design.svg'];
  const vAndG = ['Git.svg', 'Github.svg'];
  const db = ['Firebase.svg'];
  const bt = ['vite.svg'];
  const dg = ['Adobe Photoshop.svg', 'Adobe illustrator.svg', 'Figma.svg'];
  return (
    <section
      className="skills"
      id="skills"
    >
      <h1 className="title-section">
        <span>Skills</span> :
      </h1>
      <div className="skills-grid">
        <div className="skills-box">
          <h5>
            Development <span>:</span>
          </h5>
          <div className="icon-skills">
            {development.map((icon) => (
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
        </div>
        <div className="skills-box">
          <h5>
            Frameworks & Libraries <span>:</span>
          </h5>
          <div className="icon-skills">
            {frameworksAndLibraries.map((icon) => (
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
        </div>
        <div className="skills-box">
          <h5>
            Version Control & Collaboration <span>:</span>
          </h5>
          <div className="icon-skills">
            {vAndG.map((icon) => (
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
        </div>
        <div className="skills-box">
          <h5>
            Backend & Database <span>:</span>
          </h5>
          <div className="icon-skills">
            {db.map((icon) => (
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
        </div>
        <div className="skills-box">
          <h5>
            Build Tools <span>:</span>
          </h5>
          <div className="icon-skills">
            {bt.map((icon) => (
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
        </div>
        <div className="skills-box">
          <h5>
            Design & Graphics <span>:</span>
          </h5>
          <div className="icon-skills">
            {dg.map((icon) => (
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
