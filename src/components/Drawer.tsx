import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
interface DrawerProps {
  panels: string[];
  altPanels: string;
  title: string;
  logo: string;
  altLogo: string;
  description: string;
  tech: string[];
  live: string;
  prag1: string;
  prag2: string;
  prag3: string;
  duration: number;
}
const CustomDrawer = ({ panels, altPanels, logo, altLogo, title, description, tech, prag1, prag2, prag3, live, duration }: DrawerProps) => {
  const [loaded, setLoaded] = useState(false);

  const SlideItems = (Slides: string[]) => {
    return (
      <>
        {Slides.map((slide, key) => (
          <CarouselItem key={key}>
            {!loaded && (
              <Skeleton
                height={470}
                width={850}
              />
            )}

            <img
              src={slide}
              alt={altPanels}
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
          </CarouselItem>
        ))}
      </>
    );
  };

  const Tech = (Techs: string[]) => {
    return (
      <>
        {Techs.map((tech, key) => (
          <div
            key={key}
            className="border text-sm font-semibold mb-2 rounded-xl py-0.5 px-2.5"
          >
            {tech}
          </div>
        ))}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: duration, duration: 1, ease: 'easeOut' }} // Triggers when 50% visible
      viewport={{ once: true, amount: 0.7 }}
    >
      <Drawer>
        <DrawerTrigger className="w-full">
          <div className="info d-flex gap-0 justify-content-between align-items-start">
            <div className="h-[60px] p-1 w-[80px] d-flex justify-content-center align-items-center">
              <img
                src={logo}
                alt={altLogo}
                loading="lazy"
                className="object-scale-down max-w-[100%] max-h-[100%]"
              />
            </div>
            <div className="w-full h-[60px] text-box d-flex gap-2 justify-content-between align-items-center">
              <div className="description d-flex flex-column align-items-start justify-content-center">
                <h2>{title}</h2>
                <p className="max-w-[62ch] ">{description}</p>
              </div>
              <div className="button-container-3">
                <span className="mas">VIEW</span>
                <div>VIEW</div>
              </div>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent className="drawer-content">
          <OverlayScrollbarsComponent
            defer
            options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 500 } }}
            className="z-10"
          >
            <div
              className="overflow-y-scroll position-relative"
              id="drawer-content-inner"
            >
              <div className="d-flex max-md:px-4 md:px-8 justify-content-between align-items-start">
                <div className="d-flex  align-items-center">
                  <img
                    src={logo}
                    alt={altLogo}
                    loading="lazy"
                    className="ml-2 mr-4 h-[40px]"
                  />
                  <div className="description sm:max-w-[54ch] max-w-[60ch] gap-1 d-flex flex-column align-items-start justify-content-center">
                    <h2 className="my-auto">{title}</h2>
                    <p className="text-sm my-auto leading-tight text-muted-foreground">{description}</p>
                  </div>
                </div>
                <DrawerClose className="btn btn-light btn-close p-2 d-none d-md-block"></DrawerClose>
              </div>
              <hr className="max-md:mx-4 md:mx-8 text-gray-600" />
              <div className="flex flex-col gap-2 max-md:mx-4 md:mx-8">
                <h3 className="tracking-wider font-normal text-xs uppercase mb-0  text-gray-600">tech</h3>
                <div className="flex gap-2 overflow-x-auto">{Tech(tech)}</div>
              </div>
              <DrawerTitle>
                <Carousel className="md:ml-8 pt-4">
                  <CarouselContent>{SlideItems(panels)}</CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </DrawerTitle>
              <DrawerDescription className="mt-4 max-w-[58ch] pb-16 max-md:px-4 md:px-8">
                <p className="mb-0 text-lg font-light">{prag1}</p>
                <p className="text-lg font-light">{prag2}</p>
                <p className="text-lg font-light">{prag3}</p>
                <a
                  className="btn btn-dark mt-4 fw-medium"
                  href={live}
                  target="_blank"
                >
                  View Project
                </a>
              </DrawerDescription>
            </div>
          </OverlayScrollbarsComponent>
        </DrawerContent>
      </Drawer>
    </motion.div>
  );
};

export default CustomDrawer;
