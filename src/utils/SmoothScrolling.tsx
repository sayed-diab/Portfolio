import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenisOptions = {
    lerp: 0.9, // Controls how smooth the scrolling is
    duration: 0.2, // Slows down or speeds up the scrolling
    smoothTouch: false, // Disable smooth scroll on touch devices
    smooth: true, // Smooth scroll for desktop (obviously)
  };

  return (
    <ReactLenis
      root
      options={lenisOptions}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
