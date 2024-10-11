"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Define an interface for the image data
interface ImageData {
  src: string;
  alt: string;
  title: string; // Add title property
  description: string; // Add description property
}

export default function FoodCarousel({
  className,
  images, // Accept images as a prop
}: {
  className?: string;
  images: ImageData[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={"embla mx-auto " + className}>
      <div
        className="embla__viewport min-h-[calc(100vh+64px)] w-screen border"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="embla__slide flex items-center justify-center"
            >
              <div className="relative w-full h-[calc(100vh)] mt-[64px]">
                {/* Render each image dynamically */}
                <Image
                  src={image.src}
                  layout="fill" // Makes the image fill the container
                  objectFit="cover" // Prevents overflow and keeps the image within the container
                  alt={image.alt}
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-[rgba(0,0,0,0)] opacity-50" />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h2 className="relative py-3 text-5xl font-bold text-mainColor bg-black bg-opacity-30 w-full text-center ">
                    {image.title}
                    <p className="text-lg mt-2 text-white">
                      {image.description}
                    </p>
                  </h2>
                  <button className="mt-4 px-4 py-2 bg-black bg-opacity-50 text-white rounded hover:rounded-2xl hover:bg-opacity-100 transition-all">
                    Read the recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-[54%] -translate-y-1/2 transform rounded-full bg-white opacity-80 p-2  text-black"
        onClick={scrollPrev}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-[54%] -translate-y-1/2 transform rounded-full bg-white opacity-80 p-2 text-black"
        onClick={scrollNext}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
