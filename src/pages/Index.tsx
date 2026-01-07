import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <GoogleMap />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
