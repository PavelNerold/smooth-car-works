import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const GoogleMap = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/eP6UHeakrZ8NMsRA6";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.8!2d14.6!3d50.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA2JzAwLjAiTiAxNMKwMzYnMDAuMCJF!5e0!3m2!1scs!2scz!4v1234567890";

  return (
    <section id="mapa" className="py-20 md:py-32 bg-gradient-card relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
            Kde nás najdete
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Navštivte naši{" "}
            <span className="text-gradient">dílnu</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Najdete nás v Praze – Horních Počernicích. Parkování přímo u dílny.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-card">
          {/* Static Map Fallback with Interactive Overlay */}
          <div className="aspect-[16/9] md:aspect-[21/9] bg-secondary relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.0!2d14.6066!3d50.1116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93c7b5c9e5e3%3A0x2c0b5f4b5b5b5b5b!2sVe%20%C5%BEl%C3%ADbku%201849%2F2a%2C%20193%2000%20Praha%209-Horn%C3%AD%20Po%C4%8Dernice!5e0!3m2!1scs!2scz!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Autoservis BP - mapa"
            />
            
            {/* Overlay with CTA */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">Autoservis BP</h3>
                    <p className="text-muted-foreground">Ve Žlíbku 1849/2a, Horní Počernice</p>
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
