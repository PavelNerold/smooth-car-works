import { Banknote, Wrench, Coffee, FileText, Palette, CircleDot } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WhyUs = () => {
  const reasons = [
    {
      icon: Banknote,
      title: "Férová cena bez kompromisu",
      description: "Používáme originální nebo kvalitní značkové díly. Díky rozumné ceně práce ušetříte oproti autorizovanému servisu.",
    },
    {
      icon: Wrench,
      title: "Moderní vybavení a tým odborníků",
      description: "Servisujeme všechny značky – včetně aut v tovární záruce. Máme zkušenosti i se sportovními vozy.",
    },
    {
      icon: Coffee,
      title: "Čekárna s kávou a Wi-Fi",
      description: "Pokud potřebujete počkat, máte k dispozici pohodlí a klid – ideální pro rychlejší servis nebo pneuservis.",
    },
    {
      icon: FileText,
      title: "Transparentně: vše až po schválení",
      description: "Žádné práce navíc bez domluvy. Vždy víte, co se bude dělat, proč a kolik to bude stát.",
    },
    {
      icon: Palette,
      title: "Lakovna & klempírna na jednom místě",
      description: "Od oděrky po opravu po nehodě. Nemusíte řešit další firmu – vše sladíme do jednoho výsledku.",
    },
    {
      icon: CircleDot,
      title: "Pneuservis bez zbytečného čekání",
      description: "Přezutí, vyvážení, opravy defektů a kontrola pneumatik. Rychle, čistě a férově.",
    },
  ];

  return (
    <section id="o-nas" className="py-20 md:py-32 relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-[0.08]" />
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
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
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 100}>
              <div
                className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:bg-card transition-all duration-300 h-full group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
