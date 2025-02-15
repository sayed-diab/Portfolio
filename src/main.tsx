import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/normalize.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OverlayScrollbarsComponent
      options={{
        scrollbars: { autoHide: 'move' }, // Hide scrollbar when not hovering
      }}
      className="costum-scroll h-[100vh]"
    >
      <App />
    </OverlayScrollbarsComponent>
  </StrictMode>,
);
