import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-workshop.jpg";
import hero2 from "@/assets/gallery-1.jpg";
import hero3 from "@/assets/gallery-2.jpg";
import hero4 from "@/assets/gallery-3.jpg";
const slides = [hero1, hero2, hero3, hero4];
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <img src={slide} alt={`BP Autoservis - slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>)}
      
      {/* Overlay - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-[1]" />

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/30 backdrop-blur-sm border border-border/30 text-foreground/70 hover:bg-background/50 hover:text-foreground transition-all" aria-label="Předchozí slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/30 backdrop-blur-sm border border-border/30 text-foreground/70 hover:bg-background/50 hover:text-foreground transition-all" aria-label="Další slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-primary w-8" : "bg-foreground/30 hover:bg-foreground/50"}`} aria-label={`Přejít na slide ${index + 1}`} />)}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            <span className="text-gradient">Autoservis BP</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground mb-4 max-w-2xl animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            Profesionální servis aut.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{
          animationDelay: "0.25s"
        }}>
            Čistá práce, rychlá domluva a transparentní přístup – bez překvapení.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <a href="tel:+420777124194">
              <Button variant="hero" size="lg">
                <Phone className="w-5 h-5" />
                +420 777 124 194
              </Button>
            </a>
            <a href="https://maps.app.goo.gl/eP6UHeakrZ8NMsRA6" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="lg">
                <MapPin className="w-5 h-5" />
                Navigovat
              </Button>
            </a>
          </div>

          {/* Quick info */}
          
        </div>
      </div>

      {/* Bottom gradient - lighter */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/60 to-transparent z-10" />
    </section>;
};
export default HeroSlider;