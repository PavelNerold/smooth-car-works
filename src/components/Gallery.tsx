import { useState } from "react";
import { X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import galleryKlempirna from "@/assets/gallery-klempirna.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: gallery1, alt: "Nissan 370Z Nismo a Audi R8 v servisu" },
    { src: gallery2, alt: "Dílna s vozy na zvedácích" },
    { src: gallery3, alt: "Audi R8 GT žlutá a Hyundai i30 N" },
    { src: gallery4, alt: "Audi R8 na zvedáku" },
    { src: gallery5, alt: "Hyundai i30 N a Audi R8 GT" },
    { src: gallery6, alt: "Přehled prostorné dílny" },
    { src: gallery7, alt: "Detail práce na Nissan 370Z" },
    { src: galleryKlempirna, alt: "Klempířské práce - opravy po nehodách" },
  ];

  return (
    <section id="galerie" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
            Galerie
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ze{" "}
            <span className="text-gradient">servisu</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Malý výběr – klikni na fotku pro zvětšení. Specializujeme se i na sportovní a prémiové vozy.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer group animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <a href="https://www.instagram.com/autoservisbp/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <Instagram className="w-5 h-5" />
              Sledujte nás na Instagramu
            </Button>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Zvětšený náhled" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
