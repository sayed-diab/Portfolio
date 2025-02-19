import { useEffect, useState } from 'react';

const BackToUp = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const windowHeight = () => setHeight(window.scrollY);
    window.addEventListener('scroll', windowHeight);
  }, []);

  return (
    <>
      <button
        className={height >= 300 ? 'back-btn show' : 'back-btn'}
        onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })}
      >
        <div className="container-main">
          <span className="cont">
            <span className={height >= 300 ? 'tran A Z' : 'tran A'}>B</span>
            <span className={height >= 300 ? 'tran B Z' : 'tran B'}>a</span>
            <span className={height >= 300 ? 'tran C Z' : 'tran C'}>c</span>
            <span className={height >= 300 ? 'tran D Z' : 'tran D'}>k</span>
          </span>
          <span className="cont">
            <span className={height >= 300 ? 'tran E Z' : 'tran E'}> T</span>
            <span className={height >= 300 ? 'tran F Z' : 'tran F'}>o</span>
          </span>
          <span className="cont">
            <span className={height >= 300 ? 'tran G Z' : 'tran G'}>T</span>
            <span className={height >= 300 ? 'tran H Z' : 'tran H'}>o</span>
            <span className={height >= 300 ? 'tran I Z' : 'tran I'}>p</span>
          </span>
        </div>
      </button>
    </>
  );
};

export default BackToUp;
