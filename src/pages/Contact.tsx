import Ball from '@/components/ui/ball';
import '../styles/contact.css';
import { motion } from 'framer-motion';

const Links = (props: { icon: string; link: string; duration: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: props.duration, duration: 1 }}
      viewport={{ once: true, amount: 0.7 }}
    >
      <a
        className="transition-all duration-300 text-[var(--silver-color)] text-3xl ml-3 mr-3 hover:text-[var(--sec-color)]"
        href={props.link}
        target="_blank"
        aria-label={props.link}
      >
        <i className={` text-3xl bi bi-${props.icon}`}></i>
      </a>
    </motion.span>
  );
};
const Contact = () => {
  return (
    <section
      className="contact"
      id="contact"
    >
      <div className="contact-container d-flex  justify-content-between align-items-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: 'easeOut' }} // Triggers when 50% visible
          viewport={{ once: true, amount: 0.7 }}
          className="contact-info"
        >
          <h1>
            Contact <br />
            me <span style={{ color: 'var(--sec-color)' }}>now!</span>
          </h1>
          <Ball />
        </motion.div>
        <div className="mx-5 line-container d-flex">
          <motion.div
            initial={{ originX: 'left', width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeOut' }} // Triggers when 50% visible
            viewport={{ once: true, amount: 0.7 }}
            className="line"
          >
            {/* <span className="mx-5 line origin-left"></span> */}
          </motion.div>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <Links
            icon="envelope"
            link="mailto:sayeddebo95@gmail.com"
            duration={0.7 + 1.5}
          />
          <Links
            icon="github"
            link="https://github.com/sayed-diab"
            duration={0.8 + 1.5}
          />
          <Links
            icon="linkedin"
            link="https://www.linkedin.com/in/sayed-diab"
            duration={0.9 + 1.5}
          />
          <Links
            icon="whatsapp"
            link="https://wa.me/+201025257998"
            duration={1 + 1.5}
          />
          <Links
            icon="telegram"
            link="https://t.me/sayeddiab_dev"
            duration={1.1 + 1.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
