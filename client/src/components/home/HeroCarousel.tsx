import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "wouter";
import { Category } from "@shared/schema";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface HeroCarouselProps {
  categories: Category[];
}

export function HeroCarousel({ categories }: HeroCarouselProps) {
  const { t } = useI18n();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  if (!categories || categories.length === 0) {
    return <div className="w-full h-[60vh] bg-secondary animate-pulse rounded-2xl" />;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl group shadow-2xl" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {categories.map((category) => (
          <div className="relative flex-[0_0_100%] min-w-0 h-[50vh] md:h-[70vh]" key={category.id}>
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={category.imageUrl}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg max-w-4xl text-balance">
                {category.name}
              </h2>
              <Link 
                href={`/products?categoryId=${category.id}`}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-xl md:text-2xl shadow-xl hover:-translate-y-1 transition-all"
              >
                {t("viewProducts")}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/20 hover:bg-white text-white hover:text-primary backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/20 hover:bg-white text-white hover:text-primary backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30 flex gap-3">
        {categories.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === selectedIndex ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
