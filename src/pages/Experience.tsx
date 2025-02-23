import { Carousel } from 'antd';
import '../styles/experience.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section
      className="experience"
      id="experience"
    >
      <h1 className="title-section">
        <span>Experience</span> :
      </h1>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(20px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.7, ease: 'easeOut' }} // Triggers when 50% visible
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="ex__wraper">
          <Carousel
            arrows={true}
            infinite={false}
            dots={true}
            fade={true}
            speed={500}
            draggable={true}
          >
            <article>
              <h2>Front-End Development Course | Udacity</h2>
              <p>
                <strong>Duration:</strong> 2020 oct – 2021 jan
              </p>
              <div className="w-[500px]">
                <SlideshowLightbox
                  theme="lightbox"
                  modalClose="clickOutside"
                  className="container grid grid-cols-3 gap-2 mx-auto"
                >
                  <img
                    className="rounded"
                    src="./assets/certificate.webp"
                    alt="certificate"
                    loading="lazy"
                  />
                </SlideshowLightbox>
              </div>

              <ul>
                <li>Completed an intensive Front-End Web Development Nanodegree program.</li>
                <li>
                  Built projects using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>React.js</strong>.
                </li>
                <li>Gained experience in responsive web design, performance optimization, and modern development tools.</li>
                <li>Worked with APIs and asynchronous JavaScript to create interactive applications.</li>
                <li>Learned industry best practices in UI/UX design and accessibility.</li>
              </ul>
            </article>
            <article>
              <h2>React Developer (Self-Learning & Projects)</h2>
              <p>
                <strong>Duration:</strong> 2021 – Present
              </p>
              <ul>
                <li>
                  Developed multiple projects using <strong>React.js</strong>, improving state management, component structure, and performance.
                </li>
                <li>
                  Gained hands-on experience with <strong>React Hooks</strong>, <strong>Context API</strong>, and <strong>React Router</strong>.
                </li>
                <li>Built scalable UI components and reusable design patterns.</li>
                <li>
                  Implemented best practices in <strong>JavaScript ES6+</strong>, improving application maintainability.
                </li>
                <li>
                  Integrated APIs and managed asynchronous data fetching using <strong>Axios & Fetch API</strong>.
                </li>
              </ul>
            </article>
            <article>
              <h2>Front-End Developer | Freelance (Khamsat Platform)</h2>
              <p>
                <strong>Duration:</strong> 2022 – Present
              </p>
              <ul>
                <li>
                  Developed responsive and dynamic user interfaces using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>.
                </li>
                <li>Built custom web components and interactive features to enhance user experience.</li>
                <li>Optimized websites for performance, SEO, and cross-browser compatibility.</li>
                <li>Collaborated with clients to translate requirements into functional and visually appealing designs.</li>
                <li>Provided maintenance and debugging services to improve website functionality.</li>
              </ul>
            </article>
            <article>
              <h2>Front-End Developer Intern | Kreativstorm (Application in Progress)</h2>
              <p>
                <strong>Expected Duration:</strong> 2025 oct – 2026 jan
              </p>
              <ul>
                <li>Collaborate with the development team to create engaging web applications.</li>
                <li>
                  Work with <strong>Next.js</strong> and <strong>SASS</strong> to build scalable front-end solutions.
                </li>
                <li>Optimize web performance and ensure cross-browser compatibility.</li>
                <li>Gain exposure to real-world client projects and improve coding standards.</li>
              </ul>
            </article>
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
