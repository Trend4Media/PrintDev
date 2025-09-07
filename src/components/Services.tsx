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
            Von DTF-Drucken bis zum kompletten Fulfillment - wir bieten alles für Ihren Erfolg
          </p>
        </div>

        {/* Main Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* DTF Printing Card */}
          <Card className="overflow-hidden bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300 group">
            <div className="relative h-64">
              <img 
                src={printingFacility} 
                alt="DTF Printing Facility" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-printdev-teal/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-2">DTF Printing</h3>
                <p className="text-white/90 text-sm">Hochwertige DTF-Drucke in Rekordzeit</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Printer className="text-printdev-cyan" size={20} />
                  <span className="text-sm">Freie Größen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="text-printdev-cyan" size={20} />
                  <span className="text-sm">Top Qualität</span>
                </div>
              </div>
              <Button variant="cyan" className="w-full" asChild>
                <a href="#dtf-printing">DTF Services entdecken</a>
              </Button>
            </div>
          </Card>

          {/* Fulfillment Card */}
          <Card className="overflow-hidden bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300 group">
            <div className="relative h-64">
              <img 
                src={fulfillmentCenter} 
                alt="Fulfillment Center" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-printdev-pink/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-2">Fulfillment</h3>
                <p className="text-white/90 text-sm">Komplette Lager- und Versandlösungen</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Package className="text-printdev-pink" size={20} />
                  <span className="text-sm">Lagerung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="text-printdev-pink" size={20} />
                  <span className="text-sm">Versand</span>
                </div>
              </div>
              <Button variant="quote" className="w-full" asChild>
                <a href="#fulfillment">Fulfillment Services</a>
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
              Von der Produktion bis zum Onlineshop-Aufbau - alles aus einer Hand
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
            <div className="bg-printdev-pink/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="text-printdev-pink" size={24} />
            </div>
            <h3 className="font-bold mb-2">Skalierbarkeit</h3>
            <p className="text-muted-foreground text-sm">
              4000m² Lager, 80 Mitarbeiter - bereit für Ihr Wachstum
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="brand" size="lg">
            Kostenloses Beratungsgespräch vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};