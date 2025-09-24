import { QuoteForm } from "@/components/QuoteForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Angebot = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="pt-24 pb-8 bg-gradient-to-br from-printdev-teal/10 via-printdev-cyan/5 to-printdev-orange/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" asChild className="mr-4">
              <a href="/" className="flex items-center space-x-2 text-gray-600 hover:text-printdev-cyan">
                <ArrowLeft size={16} />
                <span>Zurück zur Startseite</span>
              </a>
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Angebot <span className="bg-gradient-brand bg-clip-text text-transparent">anfordern</span>
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