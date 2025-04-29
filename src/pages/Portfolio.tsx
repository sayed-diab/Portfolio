import CustomDrawer from '@/components/Drawer';
import '../styles/portfolio.css';

import { nnd, socotra, kasper, sn, petrolem } from '../utils/projects.json';
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
        <div className="flex-col project d-flex">
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
            duration={0.5}
          />
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
            duration={0.7}
          />
          <CustomDrawer
            panels={petrolem.panels}
            altPanels={petrolem.altPanels}
            title={petrolem.title}
            logo={petrolem.logo}
            altLogo={petrolem.altLogo}
            description={petrolem.description}
            tech={petrolem.tech}
            live={petrolem.live}
            prag1={petrolem.prag1}
            prag2={petrolem.prag2}
            prag3={petrolem.prag3}
            duration={1.3}
          />
        </div>
        <div className="flex-col project d-flex">
          <CustomDrawer
            panels={kasper.panels}
            altPanels={kasper.altPanels}
            title={kasper.title}
            logo={kasper.logo}
            altLogo={kasper.altLogo}
            description={kasper.description}
            tech={kasper.tech}
            live={kasper.live}
            prag1={kasper.prag1}
            prag2={kasper.prag2}
            prag3={kasper.prag3}
            duration={0.9}
          />
          <CustomDrawer
            panels={sn.panels}
            altPanels={sn.altPanels}
            title={sn.title}
            logo={sn.logo}
            altLogo={sn.altLogo}
            description={sn.description}
            tech={sn.tech}
            live={sn.live}
            prag1={sn.prag1}
            prag2={sn.prag2}
            prag3={sn.prag3}
            duration={1.1}
          />
        </div>
      </div>
    </section>
  );
};

export default Portoflio;
