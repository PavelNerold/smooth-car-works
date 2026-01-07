import { Wrench, Paintbrush, CircleDot, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Autoservis",
      description: "Kompletní servisní služby od běžné údržby po složité opravy motorů a převodovek. Diagnostika, výměna oleje, brzdy a mnoho dalšího.",
      features: ["Diagnostika závad", "Výměna oleje", "Opravy motorů", "Servis brzd"],
    },
    {
      icon: Paintbrush,
      title: "Autolakovna",
      description: "Profesionální lakování vozidel s precizní přípravou povrchu. Opravy laků, celolaky i částečné přestříky v nejvyšší kvalitě.",
      features: ["Celolaky", "Lokální opravy", "Leštění", "Ochranné fólie"],
    },
    {
      icon: CircleDot,
      title: "Pneuservis",
      description: "Sezónní přezouvání, opravy defektů, vyvažování kol a uskladnění pneumatik. Rychle a spolehlivě po celý rok.",
      features: ["Přezutí kol", "Vyvažování", "Uskladnění", "Opravy defektů"],
    },
    {
      icon: Car,
      title: "Klempířské práce",
      description: "Opravy karoserií po nehodách, rovnání plechů, opravy promáčklin a svařování. Vaše auto bude jako nové.",
      features: ["Opravy po nehodách", "Rovnání plechů", "PDR opravy", "Svařování"],
    },
  ];

  return (
    <section id="sluzby" className="py-20 md:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
            Naše služby
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Vše pro vaše{" "}
            <span className="text-gradient">vozidlo</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nabízíme komplexní péči o vaše auto. Od pravidelného servisu až po kompletní renovaci.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gradient-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-card hover:border-primary/30 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Více informací
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
