"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FoodCarousel({ className }: { className?: string }) {
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
        className="embla__viewport min-h-[calc(100vh-64px)] w-screen border"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          <div className="embla__slide flex items-center justify-center">
            Slide 1
          </div>
          <div className="embla__slide flex items-center justify-center">
            Slide 2
          </div>
          <div className="embla__slide flex items-center justify-center">
            Slide 3
          </div>
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black"
        onClick={scrollPrev}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black"
        onClick={scrollNext}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
