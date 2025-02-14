import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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
  const MyComponent = () => {
    return <>{/* prettier-ignore */}</>;
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
                  <p className="">Complete front-end build to showcase and sell premium kids' supplement products.</p>
                </div>
              </div>
              <div className="button-container-3">
                <span className="mas">VIEW</span>
                <div>VIEW</div>
              </div>
            </div>
          </DrawerTrigger>

          <DrawerContent className="drawer-content">
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
              <div className="flex gap-2 overflow-x-auto">{Tech(['React', 'Gasp', 'Gasp', 'Gasp', 'Gasp', 'Gasp', 'Gasp', 'Gasp'])}</div>
            </div>
            <DrawerTitle>
              <Carousel className="md:ml-8 pt-4">
                <CarouselContent>{SlideItems(nnd)}</CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DrawerTitle>
            <DrawerDescription className=""></DrawerDescription>
            <div className="mt-4 max-w-prose sm:px-4 pb-16 md:px-8">
              <MyComponent />
              <p className="whitespace-pre-wrap text-lg font-light">
                Kids' supplements often get a bad rap. And for good reason—many are packed with artificial ingredients, lack transparency, and fail to meet real nutritional needs.
                <br />
                NND is here to change that.
                <br />A complete rebuild of NND’s site featuring an engaging e-commerce experience, educational content, and a full admin area for seamless order management.
              </p>
              <p className="whitespace-pre-wrap text-lg font-light">
                Kids' supplements often get a bad rap. And for good reason—many are packed with artificial ingredients, lack transparency, and fail to meet real nutritional needs.
                <br />
                NND is here to change that.
                <br />A complete rebuild of NND’s site featuring an engaging e-commerce experience, educational content, and a full admin area for seamless order management.
              </p>
              <p className="whitespace-pre-wrap text-lg font-light">
                Kids' supplements often get a bad rap. And for good reason—many are packed with artificial ingredients, lack transparency, and fail to meet real nutritional needs.
                <br />
                NND is here to change that.
                <br />A complete rebuild of NND’s site featuring an engaging e-commerce experience, educational content, and a full admin area for seamless order management.
              </p>
              <p className="whitespace-pre-wrap text-lg font-light">
                Kids' supplements often get a bad rap. And for good reason—many are packed with artificial ingredients, lack transparency, and fail to meet real nutritional needs.
                <br />
                NND is here to change that.
                <br />A complete rebuild of NND’s site featuring an engaging e-commerce experience, educational content, and a full admin area for seamless order management.
              </p>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default Portoflio;
