import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
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
              <li><a href="https://maps.app.goo.gl/eP6UHeakrZ8NMsRA6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors"><MapPin className="w-4 h-4 text-primary" />Ve Žlíbku 1849/2a, Horní Počernice</a></li>
              <li><a href="tel:+420777124194" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="w-4 h-4 text-primary" />+420 777 124 194</a></li>
              <li><a href="mailto:info@autoservisbp.cz" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="w-4 h-4 text-primary" />info@autoservisbp.cz</a></li>
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
