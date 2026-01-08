import { useState } from "react";
import { X, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import galleryKlempirna from "@/assets/gallery-klempirna.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const images = [
    { src: gallery1, alt: "Nissan 370Z Nismo a Audi R8 v servisu" },
    { src: gallery2, alt: "Dílna s vozy na zvedácích" },
    { src: gallery3, alt: "Audi R8 GT žlutá a Hyundai i30 N" },
    { src: gallery4, alt: "Audi R8 na zvedáku" },
    { src: gallery5, alt: "Hyundai i30 N a Audi R8 GT" },
    { src: gallery6, alt: "Přehled prostorné dílny" },
    { src: gallery7, alt: "Detail práce na Nissan 370Z" },
    { src: galleryKlempirna, alt: "Klempířské práce - opravy po nehodách" },
  ];

  return (
    <section id="galerie" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      
      {/* Section Header */}
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              Galerie
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ze{" "}
              <span className="text-gradient">servisu</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Malý výběr – klikněte na fotku pro zvětšení. Specializujeme se i na sportovní a prémiové vozy.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width Gallery Slider */}
      <ScrollReveal>
        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[28vw] px-2"
                >
                  <div
                    className="relative overflow-hidden rounded-2xl cursor-pointer group/item aspect-[4/3]"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover/item:translate-y-0 transition-transform duration-300">
                      <p className="text-foreground font-medium text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-primary-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </button>
        </div>
      </ScrollReveal>

      {/* Instagram CTA */}
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <a href="https://www.instagram.com/autoservisbp/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary hover:bg-primary/10">
                <Instagram className="w-5 h-5" />
                Sledujte nás na Instagramu
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Zvětšený náhled" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
