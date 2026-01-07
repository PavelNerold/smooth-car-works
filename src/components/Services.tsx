import { Wrench, Paintbrush, CircleDot, Car, Settings, Gauge, ClipboardCheck, Thermometer } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Wrench,
      title: "Autoservis",
      description: "Kompletní servis a opravy všech značek vozidel. Od běžné údržby po složité opravy motorů a převodovek. Servisujeme i vozy v tovární záruce.",
      features: [
        { icon: Settings, label: "Diagnostika", desc: "Rychlé určení závady – žádné výměny naslepo." },
        { icon: Gauge, label: "Geometrie", desc: "Nastavení náprav, stabilita, sjíždění pneumatik." },
        { icon: ClipboardCheck, label: "Příprava na STK", desc: "Kontrola předem, ať STK proběhne v klidu." },
        { icon: Thermometer, label: "Klimatizace", desc: "Kontrola, servis, doplnění – aby chladila jak má." },
      ],
      expanded: [
        "Výměna oleje a filtrů",
        "Servis brzd a podvozku",
        "Opravy motorů a převodovek",
        "Výměna rozvodů",
        "Servis turbodmychadel",
        "Opravy elektroinstalace",
      ],
    },
    {
      icon: Paintbrush,
      title: "Autolakovna",
      description: "Lakování dílů, lokální opravy, kosmetika a finální vzhled. Od oděrky po kompletní přelakování vozidla v nejvyšší kvalitě.",
      features: ["Celolaky", "Lokální opravy", "Leštění", "Ochranné fólie"],
    },
    {
      icon: CircleDot,
      title: "Pneuservis",
      description: "Přezutí, vyvážení, opravy defektů, kontrola stavu. Rychle, čistě a férově – bez zbytečného čekání.",
      features: ["Přezutí kol", "Vyvažování", "Uskladnění", "Opravy defektů"],
    },
    {
      icon: Car,
      title: "Klempírna",
      description: "Opravy karoserie, rovnání, řešení poškození po nehodě. Neřešíte další firmu – vše sladíme do jednoho výsledku.",
      features: ["Opravy po nehodách", "Rovnání plechů", "PDR opravy", "Svařování"],
    },
  ];

  return (
    <section id="sluzby" className="py-20 md:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
            Naše služby
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Od servisní prohlídky{" "}
            <span className="text-gradient">až po opravu motoru</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Běžný servis, diagnostika i opravy po nehodách. Níže je výběr – když tu něco nenajdeš, zavolej a domluvíme postup.
          </p>
        </div>

        {/* Autoservis - Featured */}
        <div className="mb-12">
          <div className="bg-gradient-card rounded-3xl p-6 lg:p-10 border border-border/50 shadow-card">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left side - Main info */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold">{mainServices[0].title}</h3>
                    <p className="text-muted-foreground">Kompletní péče o vaše vozidlo</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg mb-8">
                  {mainServices[0].description}
                </p>

                {/* Key services grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {mainServices[0].features.map((feature) => (
                    <div key={feature.label} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{feature.label}</div>
                        <div className="text-sm text-muted-foreground">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Additional services */}
              <div className="lg:w-1/2 lg:border-l lg:border-border/50 lg:pl-8">
                <h4 className="font-heading text-xl font-bold mb-6">Co vše děláme</h4>
                <div className="grid grid-cols-2 gap-3">
                  {mainServices[0].expanded.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm text-foreground">
                    <strong>Máš specifický požadavek?</strong> Zavolej nám a domluvíme postup. Servisujeme všechny značky včetně sportovních vozů.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {mainServices.slice(1).map((service, index) => (
            <div
              key={service.title}
              className="group bg-gradient-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-card hover:border-primary/30 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Title & Description */}
              <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {(service.features as string[]).map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
