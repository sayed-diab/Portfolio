import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import '../styles/portfolio.css';
const Portoflio = () => {
  const nnd = ['./src/assets/projects/nnd/1.webp', './src/assets/projects/nnd/2.webp'];
  const SlideItems = (Slides: string[]) => {
    return (
      <>
        {Slides.map((slide, key) => (
          <CarouselItem key={key}>
            <img
              src={slide}
              alt=""
              loading="lazy"
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
    <section
      className="portfolio"
      id="portfolio"
    >
      <h1 className="title-section">
        <span>Portfolio</span> :
      </h1>

      <div className="project-wraper">
        <div>
          <Drawer>
            <DrawerTrigger>
              <div className="d-flex justify-content-between align-items-center">
                <div className="info d-flex justify-content-between align-items-start">
                  <img
                    src="./src/assets/favicon.webp"
                    alt="NND"
                    className="mr-5 h-[75px]"
                  />
                  <div className="description d-flex flex-column align-items-start justify-content-center">
                    <h5>NND PRO CHILDREN</h5>
                    <p className="max-w-[62ch]">Complete front-end build to showcase and sell premium kids' supplement products.</p>
                  </div>
                </div>
                <div className="button-container-3">
                  <span className="mas">VIEW</span>
                  <div>VIEW</div>
                </div>
              </div>
            </DrawerTrigger>
            <DrawerContent className="drawer-content">
              <OverlayScrollbarsComponent
                defer
                options={{ scrollbars: { autoHide: 'leave' } }}
                style={{ height: '100vh' }}
                className="costum-scroll"
              >
                <div className="d-flex max-md:px-4 md:px-8 justify-content-between align-items-start">
                  <div className="d-flex  align-items-center">
                    <img
                      src="./src/assets/favicon.webp"
                      alt="NND"
                      className="ml-2 mr-4 h-[60px]"
                    />
                    <div className="description max-w-[60ch] gap-1 d-flex flex-column align-items-start justify-content-center">
                      <h5 className="my-auto">NND PRO CHILDREN</h5>
                      <p className="text-sm my-auto leading-tight text-muted-foreground">Complete front-end build to showcase and sell premium kids' supplement products.</p>
                    </div>
                  </div>
                  <DrawerClose className="btn btn-light btn-close p-2 d-none d-md-block"></DrawerClose>
                </div>
                <hr className="max-md:mx-4 md:mx-8 text-gray-600" />
                <div className="flex flex-col gap-2 max-md:mx-4 md:mx-8">
                  <h3 className="tracking-wider font-normal text-xs uppercase mb-0  text-gray-600">tech</h3>
                  <div className="flex gap-2 overflow-x-auto">{Tech(['React', 'Gasp', ''])}</div>
                </div>
                <DrawerTitle>
                  <Carousel className="md:ml-8 pt-4">
                    <CarouselContent>{SlideItems(nnd)}</CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </DrawerTitle>
                <DrawerDescription></DrawerDescription>
                <div className="mt-4 max-w-prose pb-16 max-md:px-4 md:px-8">
                  <p className="mb-0 text-lg font-light">Kids' supplements often get a bad rap. And for good reason many are packed with artificial ingredients, lack transparency, and fail to meet real nutritional needs.</p>
                  <p className="text-lg font-light">NND is here to change that.</p>
                  <p className="text-lg font-light">A complete rebuild of NND’s site featuring an engaging e-commerce experience, educational content, and a full admin area for seamless order management.</p>{' '}
                  <a
                    className="btn btn-dark mt-4 fw-medium"
                    href="https://sayed-diab.github.io/NND/"
                  >
                    View Project
                  </a>
                </div>
              </OverlayScrollbarsComponent>
            </DrawerContent>
          </Drawer>
          <hr className="ml-auto w-[calc(100%-5rem)] self-end" />
          <Drawer>
            <DrawerTrigger>
              <div className="d-flex justify-content-between align-items-center">
                <div className="info d-flex justify-content-between align-items-start">
                  <img
                    src="./src/assets/favicon.webp"
                    alt="NND"
                    className="mr-5 h-[75px]"
                  />
                  <div className="description d-flex flex-column align-items-start justify-content-center">
                    <h5>NND PRO CHILDREN</h5>
                    <p className="max-w-[62ch]">Complete front-end build to showcase and sell premium kids' supplement products.</p>
                  </div>
                </div>
                <div className="button-container-3">
                  <span className="mas">VIEW</span>
                  <div>VIEW</div>
                </div>
              </div>
            </DrawerTrigger>
            <DrawerContent className="drawer-content">
              <OverlayScrollbarsComponent
                defer
                options={{ scrollbars: { autoHide: 'leave' } }}
                style={{ height: '100vh' }}
                className="costum-scroll"
              >
                <div className="d-flex max-md:px-4 md:px-8 justify-content-between align-items-start">
                  <div className="d-flex  align-items-center">
                    <img
                      src="./src/assets/favicon.webp"
                      alt="NND"
                      className="ml-2 mr-4 h-[60px]"
                    />
                    <div className="description max-w-[60ch] gap-1 d-flex flex-column align-items-start justify-content-center">
                      <h5 className="my-auto">NND PRO CHILDREN</h5>
                      <p className="text-sm my-auto leading-tight text-muted-foreground">Complete front-end build to showcase and sell premium kids' supplement products.</p>
                    </div>
                  </div>
                  <DrawerClose className="btn btn-light btn-close p-2 d-none d-md-block"></DrawerClose>
                </div>
                <hr className="max-md:mx-4 md:mx-8 text-gray-600" />
                <div className="flex flex-col gap-2 max-md:mx-4 md:mx-8">
                  <h3 className="tracking-wider font-normal text-xs uppercase mb-0  text-gray-600">tech</h3>
                  <div className="flex gap-2 overflow-x-auto">{Tech(['React', 'Gasp', ''])}</div>
                </div>
                <DrawerTitle>
                  <Carousel className="md:ml-8 pt-4">
                    <CarouselContent>{SlideItems(nnd)}</CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </DrawerTitle>
                <DrawerDescription></DrawerDescription>
                <div className="mt-4 max-w-prose pb-16 max-md:px-4 md:px-8">
                  <p className="mb-0 text-lg font-light">Kids' supplements often get a bad rap. And for good reason many are packed with artificial ingredients, lack transparency, and fail to meet real nutritional needs.</p>
                  <p className="text-lg font-light">NND is here to change that.</p>
                  <p className="text-lg font-light">A complete rebuild of NND’s site featuring an engaging e-commerce experience, educational content, and a full admin area for seamless order management.</p>{' '}
                  <a
                    className="btn btn-dark mt-4 fw-medium"
                    href="https://sayed-diab.github.io/NND/"
                  >
                    View Project
                  </a>
                </div>
              </OverlayScrollbarsComponent>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </section>
  );
};

export default Portoflio;
