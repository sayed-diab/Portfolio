import '../styles/about.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      className="about"
      id="about"
    >
      <h1 className="title-section">
        About <span>Me</span>
      </h1>
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0)' }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <p>
            Hi 👋, I am Sayed Diab, a passionate front-end developer with <b>over +5 years of experience</b> in building modern and responsive web applications since 2019. I specialize in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React</b>. I'm also expanding my expertise in frameworks like <b>Next.js</b>, <b>SASS</b>, and <b>Node.js</b>.
          </p>
          <p>I have also completed a front-end development course provided by the Egyptian Ministry of Communications and Information Technology in collaboration with Udacity, which enhanced my technical skills and deepened my understanding of industry best practices.</p>
          <p>I have had the privilege of working with numerous clients through the Khamsat platform, successfully delivering high-quality projects that meet their unique needs. My experience on the platform has sharpened my ability to communicate effectively, understand client requirements, and deliver results within deadlines. </p>
          <p>I am currently looking for a remote full-time position where I can contribute my expertise and continue to grow as a developer. My goal is to create user-friendly websites that provide seamless experiences, combining creativity and attention to detail. </p>
          <p>Whether working as a freelancer or as part of a team, I am committed to delivering exceptional results that exceed expectations. I'm excited to collaborate on impactful projects and bring ideas to life with clean, efficient, and scalable code. Let's connect!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
