import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    label: "O nás",
    href: "#o-nas"
  }, {
    label: "Služby",
    href: "#sluzby"
  }, {
    label: "Ceník",
    href: "#cenik"
  }, {
    label: "Galerie",
    href: "#galerie"
  }, {
    label: "Kontakt",
    href: "#kontakt"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/50 overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-primary opacity-[0.08]" />
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[80px] rounded-full" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="BP Autoservis" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-primary-foreground font-bold transition-colors duration-200 hover:!text-primary">
                {item.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+420777124194" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+420 777 124 194</span>
            </a>
            <a href="tel:+420777124194">
              <Button variant="hero" size="sm">
                Objednat se
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map(item => <a key={item.label} href={item.href} className="text-muted-foreground hover:!text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
              <a href="tel:+420777124194" className="flex items-center gap-2 text-muted-foreground py-2">
                <Phone className="w-4 h-4" />
                <span>+420 777 124 194</span>
              </a>
              <Button variant="hero" className="mt-2">
                Objednat se
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;