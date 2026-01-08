import { Wrench, Thermometer, Gauge, Settings, Car, CircleDot, ClipboardCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Pricing = () => {
  const priceCategories = [
    {
      icon: Wrench,
      title: "Servisní práce",
      description: "Ceny nezahrnují náhradní díly. Platí při zakoupení materiálu v našem servisu.",
      items: [
        { service: "Výměna oleje a filtru", price: "od 400 Kč" },
        { service: "Výměna brzdových destiček (náprava)", price: "od 600 Kč" },
        { service: "Výměna brzdových kotoučů (náprava)", price: "od 800 Kč" },
        { service: "Výměna rozvodů", price: "od 3 500 Kč" },
        { service: "Výměna spojky", price: "od 4 000 Kč" },
        { service: "Výměna tlumičů (pár)", price: "od 1 500 Kč" },
        { service: "Výměna čelního skla", price: "od 1 500 Kč" },
      ],
    },
    {
      icon: Thermometer,
      title: "Klimatizace",
      description: "Odsátí, vakuování, doplnění oleje a chladiva.",
      items: [
        { service: "Servis klimatizace (R134a)", price: "od 1 200 Kč" },
        { service: "Servis klimatizace (1234yf)", price: "od 1 800 Kč" },
        { service: "Dezinfekce klimatizace", price: "od 400 Kč" },
        { service: "Chladivo R134a", price: "4 Kč/g" },
        { service: "Chladivo 1234yf", price: "10 Kč/g" },
      ],
    },
    {
      icon: Gauge,
      title: "Geometrie",
      description: "Měření a seřízení geometrie kol pro správné chování vozidla.",
      items: [
        { service: "Měření geometrie", price: "od 500 Kč" },
        { service: "Seřízení geometrie (přední náprava)", price: "od 800 Kč" },
        { service: "Seřízení geometrie (obě nápravy)", price: "od 1 400 Kč" },
      ],
    },
    {
      icon: Settings,
      title: "Diagnostika",
      description: "Připojení, načtení a smazání závad řídící jednotky vozidla.",
      items: [
        { service: "Diagnostika vozidla", price: "od 500 Kč" },
        { service: "Rozšířená diagnostika", price: "od 800 Kč" },
        { service: "Test akumulátoru", price: "200 Kč" },
      ],
    },
    {
      icon: Car,
      title: "Mechanické opravy",
      description: "Časová náročnost se vypočítá individuálně na základě servisní prohlídky.",
      items: [
        { service: "Hodinová sazba mechanika", price: "od 600 Kč/hod" },
        { service: "Oprava motoru", price: "individuálně" },
        { service: "Oprava převodovky", price: "individuálně" },
        { service: "Oprava výfukového systému", price: "od 800 Kč" },
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Příprava na STK",
      description: "Kontrola a příprava vozidla na technickou prohlídku.",
      items: [
        { service: "Kontrola před STK", price: "od 500 Kč" },
        { service: "Příprava na STK (drobné opravy)", price: "individuálně" },
        { service: "Zajištění STK + emise", price: "dle ceníku stanice" },
      ],
    },
  ];

  const pneuserviceItems = [
    { service: "Komplet přezutí vč. vyvážení (4 kola)", prices: ["1 095 Kč", "1 395 Kč", "1 995 Kč"] },
    { service: "Demontáž + montáž celých kol vč. vyvážení (4 kola)", prices: ["895 Kč", "995 Kč", "1 095 Kč"] },
    { service: "Sezónní uskladnění pneumatik", prices: ["1 395 Kč", "1 395 Kč", "1 395 Kč"] },
    { service: "Likvidace pneumatiky", prices: ["45 Kč", "45 Kč", "45 Kč"] },
  ];

  return (
    <section id="cenik" className="py-20 md:py-32 relative overflow-hidden">
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
              Ceník
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Orientační{" "}
              <span className="text-gradient">ceník služeb</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Uvedené ceny jsou orientační a včetně DPH. Přesnou cenu vám sdělíme po prohlídce vozidla.
            </p>
          </div>
        </ScrollReveal>

        {/* Pneuservis - Featured Table */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="bg-gradient-card rounded-3xl p-6 lg:p-8 border border-border/50 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <CircleDot className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold">Pneuservis</h3>
                  <p className="text-muted-foreground">Přezutí, vyvážení, uskladnění pneumatik</p>
                </div>
              </div>

              {/* Price Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-3 pr-4 text-foreground font-semibold">Rozměr disku</th>
                      <th className="text-center py-3 px-2 text-primary font-semibold">13" - 15"</th>
                      <th className="text-center py-3 px-2 text-primary font-semibold">16" - 18"</th>
                      <th className="text-center py-3 px-2 text-primary font-semibold">19" - 23"</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pneuserviceItems.map((item, i) => (
                      <tr key={i} className="border-b border-border/30 last:border-0">
                        <td className="py-3 pr-4 text-foreground text-sm">{item.service}</td>
                        <td className="py-3 px-2 text-center text-muted-foreground text-sm">{item.prices[0]}</td>
                        <td className="py-3 px-2 text-center text-muted-foreground text-sm">{item.prices[1]}</td>
                        <td className="py-3 px-2 text-center text-muted-foreground text-sm">{item.prices[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Price Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priceCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 100}>
              <div className="bg-gradient-card rounded-2xl p-6 border border-border/50 shadow-card h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">{category.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">
                  {category.description}
                </p>

                {/* Price List */}
                <div className="flex-1 space-y-3">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-border/30 last:border-0"
                    >
                      <span className="text-foreground text-sm">{item.service}</span>
                      <span className="text-primary font-semibold text-sm whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-xl px-6 py-4">
              <p className="text-foreground text-sm">
                <strong>Potřebujete přesnou kalkulaci?</strong> Zavolejte nám na{" "}
                <a href="tel:+420777124194" className="text-primary hover:underline font-semibold">
                  +420 777 124 194
                </a>{" "}
                nebo přijeďte na nezávaznou prohlídku.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
