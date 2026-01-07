import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSlider />
      <Services />
      <WhyUs />
      <Gallery />
      <GoogleMap />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
