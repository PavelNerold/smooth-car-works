import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroBg from "@/assets/hero-workshop.jpg";

const Hero = () => {
  const features = [
    { icon: Shield, label: "Záruka kvality" },
    { icon: Clock, label: "Rychlý servis" },
    { icon: Award, label: "15+ let zkušeností" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="BP Autoservis - dílna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">BP Autoservis</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Kompletní péče o{" "}
            <span className="text-gradient">vaše auto</span>{" "}
            na jednom místě
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Autoservis, lakovna, pneuservis a klempířské práce. Profesionální služby s důrazem na kvalitu a spokojenost zákazníka.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg">
              Objednat servis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Prohlédnout služby
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
