import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-workshop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="BP Autoservis - dílna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
            <span className="text-sm text-muted-foreground">Autoservis • Pneuservis • Lakovna • Horní Počernice</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">Autoservis BP</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground mb-4 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Profesionální servis aut.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Čistá práce, rychlá domluva a transparentní přístup – bez překvapení.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
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
          <div className="flex flex-wrap gap-6 animate-fade-up text-muted-foreground" style={{ animationDelay: "0.4s" }}>
            <span>📍 Ve Žlíbku 1849/2a, Horní Počernice</span>
            <span>🕘 Po–Pá: 7:00–16:30</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
