const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    sluzby: [
      { label: "Autoservis", href: "#sluzby" },
      { label: "Autolakovna", href: "#sluzby" },
      { label: "Pneuservis", href: "#sluzby" },
      { label: "Klempířské práce", href: "#sluzby" },
    ],
    kontakt: [
      { label: "+420 123 456 789", href: "tel:+420123456789" },
      { label: "info@autoservis.cz", href: "mailto:info@autoservis.cz" },
      { label: "Průmyslová 123, Praha 5", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">A</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Auto<span className="text-gradient">Servis</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-md">
              Profesionální autoservis s více než 15 lety zkušeností. Nabízíme kompletní péči o vaše vozidlo včetně lakovny, pneuservisu a klempířských prací.
            </p>
          </div>

          {/* Links - Služby */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Služby</h4>
            <ul className="space-y-2">
              {links.sluzby.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Kontakt */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2">
              {links.kontakt.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AutoServis. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ochrana osobních údajů
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Obchodní podmínky
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
