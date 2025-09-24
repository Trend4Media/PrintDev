import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { DTFPrinting } from "@/components/DTFPrinting";
import { Fulfillment } from "@/components/Fulfillment";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";

const Index = () => {
  const { trackPageVisit } = useAnalytics();

  useEffect(() => {
    // Track page visit
    trackPageVisit('/');
    
    // SEO: Add structured data for services
    // SEO: Add structured data for services
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "DTF Druck Services",
      "description": "Professionelle DTF-Drucke in höchster Qualität mit Express-Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": "PrintDev",
        "telephone": "+49 (0) 123 456 789",
        "email": "info@printdev.de"
      },
      "serviceType": [
        "DTF Transfer Freie Größe",
        "DTF Express Service",
        "Produktberatung",
        "Textilveredlung"
      ],
      "areaServed": {
        "@type": "Country", 
        "name": "Deutschland"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <DTFPrinting />
      <Fulfillment />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
