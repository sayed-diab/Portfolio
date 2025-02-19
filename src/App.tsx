import { useEffect } from 'react';
import Hero from './pages/Hero';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { OverlayScrollbars } from 'overlayscrollbars';

function App() {
  useEffect(() => {
    OverlayScrollbars(document.body, {
      scrollbars: {
        autoHide: 'leave', // Options: "never", "scroll", "leave", "move"
        autoHideDelay: 500,
      },
    });
  }, []);

  return <Hero />;
}

export default App;
