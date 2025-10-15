"use client";

import img1 from "@/assets/images/cr-1.jpg";
import img2 from "@/assets/images/cr-2.jpg";
import img3 from "@/assets/images/cr-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    image: img1,
    title: '"A NATIONALIST TO THE CORE"',
    subtitle: "",
  },
  {
    image: img2,
    title: '"A FAMILY MAN"',
    subtitle: "",
  },
  {
    image: img3,
    title: '"DEDICATED TO SERVICE"',
    subtitle: "",
  },
];

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  console.log(count);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="relative w-full h-[500px] overflow-hidden" id="home">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="h-[500px]">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  quality={100}
                  sizes="100vw"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center sm:justify-end px-4 sm:px-6 md:px-12 lg:px-20">
                <div
                  className={`max-w-2xl text-center sm:text-right transition-all duration-700 ease-out ${
                    current === index
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                >
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-400 leading-tight tracking-tight drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-3 h-3 bg-orange-500 shadow-lg shadow-orange-500/50"
                : "w-2.5 h-2.5 bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
