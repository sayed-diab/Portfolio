import '../styles/asidebar.css';
const AsideBar = () => {
  return (
    <section className="aside-bar">
      <div className="logo-container">
        <img
          src="./src/assets/favicon2.png"
          alt="logo"
        />
        <h1>
          sayed<b>Diab</b>
        </h1>
      </div>
      <div className="social">
        <a href="https://github.com/sayed-diab">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sayed-diab-974687224/">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default AsideBar;
