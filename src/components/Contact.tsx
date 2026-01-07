import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Adresa",
      value: "Průmyslová 123, Praha 5",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+420 123 456 789",
      href: "tel:+420123456789",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "info@bpautoservis.cz",
      href: "mailto:info@bpautoservis.cz",
    },
    {
      icon: Clock,
      label: "Otevírací doba",
      value: "Po-Pá: 7:00 - 18:00",
    },
  ];

  return (
    <section id="kontakt" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* CTA Card */}
        <div className="relative rounded-3xl overflow-hidden mb-20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-primary opacity-90" />
          <div className="absolute inset-0 geometric-pattern opacity-10" />
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Potřebujete opravit auto?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Zavolejte nám nebo nám napište a my se vám ozveme co nejdříve. Rádi vám poradíme a domluvíme termín.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Zavolat
                <Phone className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Napsat e-mail
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item) => {
            const content = (
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 text-center group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                <div className="font-heading font-semibold text-foreground">{item.value}</div>
              </div>
            );

            if (item.href) {
              return (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              );
            }
            return <div key={item.label}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
