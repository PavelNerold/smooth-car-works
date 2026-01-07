import { Banknote, Wrench, Coffee, FileText, Palette, CircleDot } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Banknote,
      title: "Férová cena bez kompromisu",
      description: "Používáme originální nebo kvalitní značkové díly. Díky rozumné ceně práce ušetříš oproti autorizovanému servisu.",
    },
    {
      icon: Wrench,
      title: "Moderní vybavení a tým odborníků",
      description: "Servisujeme všechny značky – včetně aut v tovární záruce. Máme zkušenost i se sportovními vozy.",
    },
    {
      icon: Coffee,
      title: "Čekárna s kávou a Wi-Fi",
      description: "Když potřebuješ počkat, máš pohodlí a klid – ideální pro rychlejší servis nebo pneuservis.",
    },
    {
      icon: FileText,
      title: "Transparentně: vše až po schválení",
      description: "Žádné práce navíc bez domluvy. Vždy víš, co se bude dělat, proč a kolik to bude stát.",
    },
    {
      icon: Palette,
      title: "Lakovna & klempírna na jednom místě",
      description: "Od oděrky po opravu po nehodě. Neřešíš další firmu – vše sladíme do jednoho výsledku.",
    },
    {
      icon: CircleDot,
      title: "Pneuservis bez zbytečného čekání",
      description: "Přezutí, vyvážení, opravy defektů a kontrola pneu. Rychle, čistě a férově.",
    },
  ];

  return (
    <section id="o-nas" className="py-20 md:py-32 bg-gradient-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
            Proč si vybrat nás
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Kvalita, která{" "}
            <span className="text-gradient">dává smysl</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Chceme, aby servis byl profesionální, transparentní a zároveň cenově rozumný.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
