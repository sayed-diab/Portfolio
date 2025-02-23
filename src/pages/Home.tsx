import '../styles/home.css';
import MorphingText from '@/components/ui/morphing-text';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="home"
    >
      <div className="land-container">
        <div className="scroll-down">scroll down</div>

        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="wraper"
        >
          <div className="shape-pic">
            <div className="cut-shape">
              <img
                src="./assets/New-Bg.webp"
                alt="pic"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <div className="text flex flex-col">
            <h1>
              I am <span className="a">a</span>
              <MorphingText
                texts={['creative', 'motivated', 'passionate']}
                className="texting"
              />
              <br />
              frontend developer.
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
