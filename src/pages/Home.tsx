import '../styles/home.css';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import MorphingText from '@/components/ui/morphing-text';

const Home = () => {
  return (
    <section
      id="home"
      className="home"
    >
      <div className="land-container">
        <div className="scroll-down">scroll down</div>
        <div className="wraper">
          <NeonGradientCard
            className="shadow"
            borderSize={0}
            borderRadius={999}
            neonColors={{ firstColor: '#808080', secondColor: '#ee0001' }}
          ></NeonGradientCard>
          <div className="shape-pic">
            <div className="cut-shape">
              <img
                src="./src/assets/New-Bg.webp"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="text flex flex-col">
          <h2 className="fw-light mb-0 fs-1 flex align-items-center">Hi, I am Sayed Diab,</h2>
          <h1>
            I am <span className="a">a</span>
            <MorphingText
              texts={['creative', 'motivated', 'passionate']}
              className="texting"
            />
            <br />
            frontend developer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
