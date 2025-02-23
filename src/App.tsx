import Hero from './pages/Hero.tsx';
import './styles/App.css';
import { OverlayScrollbars } from 'overlayscrollbars';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  OverlayScrollbars(document.body, {
    scrollbars: {
      autoHide: 'move', // Options: "never", "scroll", "leave", "move"
      autoHideDelay: 1500,
    },
  });

  return <Hero />;
}

export default App;
