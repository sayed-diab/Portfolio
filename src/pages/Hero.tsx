import React, { useRef, useState, useEffect } from 'react';
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Skills = React.lazy(() => import('./Skills'));
const Experience = React.lazy(() => import('./Experience'));
const Portfolio = React.lazy(() => import('./Portfolio'));
const Contact = React.lazy(() => import('./Contact'));
const Navbar = React.lazy(() => import('@/components/Navbar'));
const AsideBar = React.lazy(() => import('@/components/AsideBar'));
const BackToUp = React.lazy(() => import('@/components/BackToUp'));
const Hero = () => {
  const spyRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = spyRef.current?.querySelectorAll('section[id]') ?? [];
    const observerOptions = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="hero">
      <AsideBar />
      <Navbar stateY={activeSection} />
      <div
        id="spy"
        ref={spyRef}
        className="main-content"
      >
        <BackToUp />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
};

export default Hero;
