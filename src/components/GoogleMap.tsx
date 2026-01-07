import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const GoogleMap = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/eP6UHeakrZ8NMsRA6";

  return (
    <section id="mapa" className="py-12 md:py-16 bg-gradient-card relative">
      <div className="absolute inset-0 geometric-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden border border-primary/20">
          {/* Dark overlay to match theme */}
          <div className="absolute inset-0 bg-background/40 pointer-events-none z-10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.0!2d14.6066!3d50.1116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93c7b5c9e5e3%3A0x2c0b5f4b5b5b5b5b!2sVe%20%C5%BEl%C3%ADbku%201849%2F2a%2C%20193%2000%20Praha%209-Horn%C3%AD%20Po%C4%8Dernice!5e0!3m2!1scs!2scz!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) brightness(0.4) contrast(1.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Autoservis BP - mapa"
          />
          
          {/* Bottom Overlay with CTA */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent z-20">
            <div className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-heading font-bold text-base md:text-lg text-foreground">Autoservis BP</h3>
                    <p className="text-muted-foreground text-sm">Ve Žlíbku 1849/2a, Horní Počernice</p>
                  </div>
                </div>
                
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg">
                    <Navigation className="w-4 h-4" />
                    Navigovat
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
