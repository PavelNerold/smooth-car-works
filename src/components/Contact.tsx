import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Adresa",
      value: "Ve Žlíbku 1849/2a, Horní Počernice",
      href: "https://maps.app.goo.gl/eP6UHeakrZ8NMsRA6",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+420 777 124 194",
      href: "tel:+420777124194",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "info@autoservisbp.cz",
      href: "mailto:info@autoservisbp.cz",
    },
    {
      icon: Clock,
      label: "Otevírací doba",
      value: "Po–Pá: 7:00–16:30",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@autoservisbp",
      href: "https://www.instagram.com/autoservisbp/",
    },
  ];

  return (
    <section id="kontakt" className="py-20 md:py-32 relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-[0.08]" />
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
            Kontakt
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Domluvme{" "}
            <span className="text-gradient">termín</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nejrychlejší je telefon. Pokud nemůžete, pošlete e-mail nebo vyplňte formulář – ozveme se Vám.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info & CTA */}
          <div>
            {/* Quick CTA */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-primary opacity-90" />
              <div className="absolute inset-0 geometric-pattern opacity-10" />
              
              <div className="relative z-10 p-8 text-center">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                  Potřebujete opravit auto?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Čistá práce, rychlá domluva a transparentní přístup – bez překvapení.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="tel:+420777124194">
                    <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                      <Phone className="w-5 h-5" />
                      Zavolat
                    </Button>
                  </a>
                  <a href="mailto:info@autoservisbp.cz">
                    <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                      <Mail className="w-5 h-5" />
                      Napsat e-mail
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => {
                const content = (
                  <div className="p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-heading font-semibold text-foreground">{item.value}</div>
                      </div>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="block">
                      {content}
                    </a>
                  );
                }
                return <div key={item.label}>{content}</div>;
              })}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
