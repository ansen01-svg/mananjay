"use client";

import img1 from "@/assets/images/cr-1.jpg";
import img2 from "@/assets/images/cr-2.jpg";
import img3 from "@/assets/images/cr-3.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

interface GalleryImage {
  id: number;
  src: StaticImageData | string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: img1,
    alt: "Gallery Image 1",
    caption:
      "Addressed the foundation day ceremony of the NSG and laid the foundation of the Special Operations Training Centre, in Manesar Haryana.",
  },
  {
    id: 2,
    src: img2,
    alt: "Gallery Image 2",
    caption:
      "Meeting with distinguished delegates to discuss important matters.",
  },
  {
    id: 3,
    src: img3,
    alt: "Gallery Image 3",
    caption: "Inaugurating a new development project for the community.",
  },
  {
    id: 4,
    src: img1,
    alt: "Gallery Image 4",
    caption: "Participating in cultural events and celebrations.",
  },
  {
    id: 5,
    src: img2,
    alt: "Gallery Image 5",
    caption: "International diplomatic meeting with world leaders.",
  },
];

const ImageGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const desktopThumbnailRef = useRef<HTMLDivElement>(null);
  const mobileThumbnailRef = useRef<HTMLDivElement>(null);

  const scrollThumbnails = (
    direction: "up" | "down" | "left" | "right",
    isMobile: boolean = false
  ) => {
    const containerRef = isMobile ? mobileThumbnailRef : desktopThumbnailRef;

    if (containerRef.current) {
      const scrollAmount = 180;
      if (direction === "up" || direction === "down") {
        containerRef.current.scrollBy({
          top: direction === "down" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({
          left: direction === "right" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 via-gray-50 to-orange-50 relative overflow-hidden"
      id="gallery"
    >
      {/* Premium decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-green-300/20 to-green-500/20 rounded-full blur-3xl" />
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with More Link */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300">
            <h2 className="text-base md:text-lg font-bold uppercase tracking-wider">
              IMAGE GALLERY
            </h2>
          </div>
        </div>

        {/* Gallery Layout - Desktop */}
        <div className="hidden lg:flex gap-6 max-w-5xl mx-auto">
          {/* Main Image Display */}
          <div className="flex-1 max-w-3xl">
            <div className="relative w-full h-[420px] aspect-video rounded-3xl overflow-hidden shadow-2xl ring-2 ring-orange-300/50 hover:ring-orange-400/70 transition-all duration-300">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-cover"
                priority
              />
              {/* Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-8 py-6">
                <p className="text-white text-base md:text-lg font-semibold leading-relaxed">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail Sidebar - Vertical */}
          <div className="flex flex-col items-center gap-4">
            {/* Scroll Up Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollThumbnails("up", false)}
              className="hover:bg-orange-100 rounded-full w-10 h-10 transition-all duration-300"
              aria-label="Scroll up"
            >
              <ChevronUp className="w-6 h-6 text-orange-600" />
            </Button>

            {/* Thumbnails Container */}
            <div
              ref={desktopThumbnailRef}
              className="flex flex-col p-2 gap-4 overflow-y-scroll max-h-[300px] scroll-smooth sm:mr-100"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "relative flex-shrink-0 w-28 h-24 rounded-2xl overflow-hidden transition-all duration-300",
                    selectedImage === index
                      ? "ring-4 ring-orange-500 shadow-xl shadow-orange-500/50 scale-105"
                      : "ring-2 ring-gray-200 hover:ring-orange-300"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Scroll Down Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollThumbnails("down", false)}
              className="hover:bg-orange-100 rounded-full w-10 h-10 transition-all duration-300"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-6 h-6 text-orange-600" />
            </Button>
          </div>
        </div>

        {/* Gallery Layout - Mobile */}
        <div className="lg:hidden space-y-6">
          {/* Main Image Display */}
          <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl ring-2 ring-orange-300/50">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-cover"
              priority
            />
            {/* Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 py-4">
              <p className="text-white text-sm md:text-base font-semibold leading-relaxed">
                {galleryImages[selectedImage].caption}
              </p>
            </div>
          </div>

          {/* Thumbnail Carousel - Horizontal */}
          <div className="flex items-center gap-3">
            {/* Scroll Left Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollThumbnails("left", true)}
              className="hover:bg-orange-100 rounded-full w-10 h-10 flex-shrink-0 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-orange-600" />
            </Button>

            {/* Thumbnails Container */}
            <div
              ref={mobileThumbnailRef}
              className="flex gap-3 p-2 overflow-x-scroll scroll-smooth flex-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "relative flex-shrink-0 w-24 h-20 rounded-xl overflow-hidden transition-all duration-300",
                    selectedImage === index
                      ? "ring-4 ring-orange-500 shadow-xl shadow-orange-500/50 scale-105"
                      : "ring-2 ring-gray-200 hover:ring-orange-300"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Scroll Right Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollThumbnails("right", true)}
              className="hover:bg-orange-100 rounded-full w-10 h-10 flex-shrink-0 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-orange-600" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
