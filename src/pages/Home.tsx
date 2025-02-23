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
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="wraper"
        >
          <div className="shape-pic">
            <div className="cut-shape">
              <img
                src="./assets/New-Bg.webp"
                alt=""
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

{
  /* <div className="ml-10 work font-semibold bg-green-600/20 mt-3 whitespace-nowrap text-green-600 hover:bg-green-500/20 text-sm px-3 py-1 rounded-full inline-block hover:text-green-500">
  <span className="p-1 my-auto mb-px mr-1.5 inline-block bg-green-600 rounded-full"></span>
  Open to work
</div> */
}
