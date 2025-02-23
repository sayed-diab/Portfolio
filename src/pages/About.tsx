import '../styles/about.css';
import { motion } from 'framer-motion';

const About = () => {
  const textArr = [
    'Hi 👋, I am Sayed Diab, I am a passionate front-end developer with over 5 years of experience in building modern and responsive web applications since 2019. I specialize in technologies like HTML, CSS, JavaScript, and React, and I am constantly expanding my skills to include frameworks such as Next.js, SASS, and Node.js.',
    'I have also completed a front-end development course provided by the Egyptian Ministry of Communications and Information Technology in collaboration with Udacity, which enhanced my technical skills and deepened my understanding of industry best practices.',
    'I have had the privilege of working with numerous clients through the Khamsat platform, successfully delivering high-quality projects that meet their unique needs. My experience on the platform has sharpened my ability to communicate effectively, understand client requirements, and deliver results within deadlines.',
    'I am currently looking for a remote full-time position where I can contribute my expertise and continue to grow as a developer. My goal is to create user-friendly websites that provide seamless experiences, combining creativity and attention to detail.',
    'Whether working as a freelancer or as part of a team, I am committed to delivering exceptional results that exceed expectations. Let’s work together to bring your ideas to life!',
  ];
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          {textArr.map((com, index) => {
            return (
              <>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 * index, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <p>{com}</p>
                </motion.span>
              </>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
