import { QuoteForm } from "@/components/QuoteForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";

const Angebot = () => {
  const { trackPageVisit } = useAnalytics();

  useEffect(() => {
    // Track page visit
    trackPageVisit('/angebot');
    
    // SEO: Update page title and meta description for quote page
    // SEO: Update page title and meta description for quote page
    document.title = "DTF Druck Angebot anfordern | PrintDev - Kostenloses Angebot";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Kostenloses DTF Druck Angebot anfordern. Freie Größen, Express-Service verfügbar. Professionelle Beratung inklusive. Schnelle Rückmeldung innerhalb 24h.'
      );
    }

    // Cleanup function to restore original meta tags when leaving page
    return () => {
      document.title = "PrintDev - DTF Druck Services | Professionelle Textilveredlung";
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          'Professionelle DTF-Drucke in höchster Qualität. Freie Größen, Express-Service in 24-48h. Individuelle Beratung für Textilveredler. Jetzt kostenloses Angebot anfordern!'
        );
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="pt-24 pb-8 bg-gradient-to-br from-printdev-teal/10 via-printdev-cyan/5 to-printdev-orange/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" asChild className="mr-4">
              <a href="#/" className="flex items-center space-x-2 text-gray-600 hover:text-printdev-cyan">
                <ArrowLeft size={16} />
                <span>Zurück zur Startseite</span>
              </a>
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DTF Druck <span className="bg-gradient-brand bg-clip-text text-transparent">Angebot anfordern</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Erhalten Sie ein individuelles Angebot für Ihre DTF-Druck Anfrage. 
              Schnell, unkompliziert und kostenlos.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <QuoteForm />
      
      <Footer />
    </div>
  );
};

export default Angebot;