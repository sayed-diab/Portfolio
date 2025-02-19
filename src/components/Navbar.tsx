import { useEffect, useState } from 'react';
import '../styles/navbar.css';
interface NavbarProps {
  stateY: string; // Define the stateY prop here
}
const Navbar: React.FC<NavbarProps> = ({ stateY }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      {width > 991 && (
        <nav className="full-width">
          <div className="vertical-div">
            <ul>
              <li>
                <a
                  className={stateY === 'contact' ? 'item--nav active-scroll-spy' : 'item--nav'}
                  href="#contact"
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a
                  className={stateY === 'portfolio' ? 'item--nav active-scroll-spy' : 'item--nav'}
                  href="#portfolio"
                >
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a
                  className={stateY === 'experience' ? 'item--nav active-scroll-spy' : 'item--nav'}
                  href="#experience"
                >
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a
                  className={stateY === 'skills' ? 'item--nav active-scroll-spy' : 'item--nav'}
                  href="#skills"
                >
                  SKILLS
                </a>
              </li>
              <li>
                <a
                  className={stateY === 'about' ? 'item--nav active-scroll-spy' : 'item--nav'}
                  href="#about"
                >
                  ABOUT ME
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
      {width < 992 && (
        <nav className="navbar navbar-expand-lg bg-body-black">
          <div className="container-fluid">
            <div className="logo">
              <img
                src="./assets/favicon.webp"
                alt="logo"
              />
              <h1 className="navbar-brand">
                sayed<b>Diab</b>
              </h1>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav p-2  text-center mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#about"
                  >
                    ABOUT ME
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#skills"
                  >
                    SKILLS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#experience"
                  >
                    EXPERIENCE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#portfolio"
                  >
                    PORTFOLIO
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#contact"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
