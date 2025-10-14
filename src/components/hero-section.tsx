"use client";

import img1 from "@/assets/images/carousel-1.jpg";
import img2 from "@/assets/images/carousel-2.jpg";
import img3 from "@/assets/images/carousel-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  console.log(count);

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
    {
      image: img1,
      title: '"LEADER OF THE PEOPLE"',
      subtitle: "",
    },
    {
      image: img2,
      title: '"GUARDIAN OF DEMOCRACY"',
      subtitle: "",
    },
  ];

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
    <section className="relative w-full h-[600px] overflow-hidden">
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
        <CarouselContent className="h-[600px]">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-[650px]">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  quality={100}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-end px-6 md:px-12 lg:px-20">
                <div className="max-w-2xl text-right mt-20">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-light leading-tight tracking-tight">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white font-medium">
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-3 h-3 bg-[#FF7F5C]"
                : "w-2.5 h-2.5 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
