import CustomDrawer from '@/components/Drawer';
import '../styles/portfolio.css';
import { nnd, socotra } from '../utils/projects.json';
const Portoflio = () => {
  return (
    <section
      className="portfolio"
      id="portfolio"
    >
      <h1 className="title-section">
        <span>Portfolio</span> :
      </h1>

      <div className="project-wraper">
        <div className="project d-flex flex-col">
          <CustomDrawer
            panels={nnd.panels}
            altPanels={nnd.altPanels}
            title={nnd.title}
            logo={nnd.logo}
            altLogo={nnd.altLogo}
            description={nnd.description}
            tech={nnd.tech}
            live={nnd.live}
            prag1={nnd.prag1}
            prag2={nnd.prag2}
            prag3={nnd.prag3}
          />
          <CustomDrawer
            panels={socotra.panels}
            altPanels={socotra.altPanels}
            title={socotra.title}
            logo={socotra.logo}
            altLogo={socotra.altLogo}
            description={socotra.description}
            tech={socotra.tech}
            live={socotra.live}
            prag1={socotra.prag1}
            prag2={socotra.prag2}
            prag3={socotra.prag3}
          />
        </div>
        <div className="project d-flex flex-col"></div>
      </div>
    </section>
  );
};

export default Portoflio;
