import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Package, Truck, Settings, Users, BarChart3 } from "lucide-react";
import printingFacility from "@/assets/printing-facility.jpg";
import fulfillmentCenter from "@/assets/fulfillment-center.jpg";

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Unsere Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professioneller DTF-Druck und umfassende Beratung - 
            qualitativ hochwertig und termingerecht.
          </p>
        </div>

        {/* Main Service Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300 group">
            <div className="relative h-80">
              <img 
                src={printingFacility} 
                alt="DTF Printing Facility" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-printdev-teal/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-bold text-white mb-3">DTF Printing</h3>
                <p className="text-white/90 text-lg">Hochwertige DTF-Drucke in Rekordzeit mit professioneller Beratung</p>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Printer className="text-printdev-cyan" size={24} />
                  <span className="text-sm font-medium">Freie Größen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="text-printdev-cyan" size={24} />
                  <span className="text-sm font-medium">Top Qualität</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-printdev-cyan" size={24} />
                  <span className="text-sm font-medium">Beratung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="text-printdev-cyan" size={24} />
                  <span className="text-sm font-medium">Skalierbar</span>
                </div>
              </div>
              <Button variant="cyan" size="lg" className="w-full" asChild>
                <a href="#dtf-printing">DTF Services entdecken</a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
            <div className="bg-printdev-cyan/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-printdev-cyan" size={24} />
            </div>
            <h3 className="font-bold mb-2">Produktberatung</h3>
            <p className="text-muted-foreground text-sm">
              Langjährige Erfahrung in Gestaltung, Material und Markenaufbau
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
            <div className="bg-printdev-orange/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Settings className="text-printdev-orange" size={24} />
            </div>
            <h3 className="font-bold mb-2">Komplettlösung</h3>
            <p className="text-muted-foreground text-sm">
              Von der Produktion bis zum Versand - alles aus einer Hand
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
            <div className="bg-printdev-pink/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="text-printdev-pink" size={24} />
            </div>
            <h3 className="font-bold mb-2">Skalierbarkeit</h3>
            <p className="text-muted-foreground text-sm">
              Flexibel skalierbare Versandlösungen für Ihr Wachstum
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="brand" size="lg" asChild>
            <a href="/angebot">Kostenloses Beratungsgespräch vereinbaren</a>
          </Button>
        </div>
      </div>
    </section>
  );
};