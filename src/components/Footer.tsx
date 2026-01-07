import { Phone, Mail, MapPin, Instagram, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const googleMapsUrl = "https://maps.app.goo.gl/eP6UHeakrZ8NMsRA6";

  return (
    <footer className="bg-card border-t border-border/50">
      {/* Map Section */}
      <div className="relative h-[300px] w-full">
        <div className="absolute inset-0 bg-background/30 pointer-events-none z-10" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.8!2d14.6066!3d50.1116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bee1f0e0f0f0f%3A0x1234567890abcdef!2sVe%20%C5%BDl%C3%ADbku%201849%2F2a%2C%20193%2000%20Praha%209-Horn%C3%AD%20Po%C4%8Dernice!5e0!3m2!1scs!2scz!4v1704600000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(80%) brightness(0.5) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Autoservis BP - mapa"
        />
        <div className="absolute bottom-4 right-4 z-20">
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="default" className="shadow-lg">
              <Navigation className="w-4 h-4" />
              Navigovat
            </Button>
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <img src={logo} alt="Autoservis BP" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Profesionální autoservis v Praze – Horních Počernicích. Čistá práce, rychlá domluva a transparentní přístup.
            </p>
            <a href="https://www.instagram.com/autoservisbp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Instagram className="w-5 h-5" />
              @autoservisbp
            </a>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Služby</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#sluzby" className="hover:text-primary transition-colors">Autoservis</a></li>
              <li><a href="#sluzby" className="hover:text-primary transition-colors">Autolakovna</a></li>
              <li><a href="#sluzby" className="hover:text-primary transition-colors">Pneuservis</a></li>
              <li><a href="#sluzby" className="hover:text-primary transition-colors">Klempírna</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors"><MapPin className="w-4 h-4 text-primary" />Ve Žlíbku 1849/2a, Horní Počernice</a></li>
              <li><a href="tel:+420777124194" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="w-4 h-4 text-primary" />+420 777 124 194</a></li>
              <li><a href="mailto:info@autoservisbp.cz" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="w-4 h-4 text-primary" />info@autoservisbp.cz</a></li>
              <li className="text-sm pt-2">IČ: 67998577</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Autoservis BP. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
