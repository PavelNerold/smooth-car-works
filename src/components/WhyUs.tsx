import { CheckCircle2, Users, Timer, Sparkles, ThumbsUp, Truck } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Zkušený tým",
      description: "Naši mechanici mají průměrně 10+ let praxe v oboru.",
    },
    {
      icon: Timer,
      title: "Rychlé termíny",
      description: "Většinu servisních prací zvládneme do 24 hodin.",
    },
    {
      icon: Sparkles,
      title: "Moderní vybavení",
      description: "Používáme nejnovější diagnostiku a technologie.",
    },
    {
      icon: ThumbsUp,
      title: "Férové ceny",
      description: "Transparentní ceník bez skrytých poplatků.",
    },
    {
      icon: Truck,
      title: "Odvoz a dovoz",
      description: "Postaráme se o přepravu vašeho vozu.",
    },
    {
      icon: CheckCircle2,
      title: "Záruka na práci",
      description: "Na všechny práce poskytujeme záruku 24 měsíců.",
    },
  ];

  return (
    <section id="o-nas" className="py-20 md:py-32 bg-gradient-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              Proč my
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Důvěra postavená na{" "}
              <span className="text-gradient">kvalitě</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Již více než 15 let se staráme o vozidla našich zákazníků. Naším cílem je poskytovat služby nejvyšší kvality za rozumné ceny.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Let zkušeností</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Spokojených zákazníků</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Spokojenost</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
