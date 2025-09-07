import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Truck, BarChart3, Settings, Users, Globe, ShoppingCart, HeadphonesIcon } from "lucide-react";
import fulfillmentCenter from "@/assets/fulfillment-center.jpg";

export const Fulfillment = () => {
  return (
    <section id="fulfillment" className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-printdev-pink text-white">FULFILLMENT</Badge>
          <h2 className="text-4xl font-bold mb-4">Komplette Fulfillment-Lösungen</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der Planung bis zur Lieferung - mit über 4000m² Lager, 80 Mitarbeitern 
            und verschiedensten Produktionsverfahren holen wir alles aus Ihren Ideen raus.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Ihr Partner für den Erfolg</h3>
            <p className="text-muted-foreground mb-6">
              Sie suchen einen Partner, der nicht nur Ihr Motiv kreativ umsetzt, sondern Sie als 
              kompetenter Partner in allen Belangen zur Seite steht? Dann sind Sie bei uns richtig.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-brand rounded-full"></div>
                <span>Produktberatung und Markenaufbau</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-brand rounded-full"></div>
                <span>Lagerung und Konfektionierung</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-brand rounded-full"></div>
                <span>Onlineshop-Aufbau und Abwicklung</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-brand rounded-full"></div>
                <span>Vollständiges Verteilungsmanagement</span>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src={fulfillmentCenter} 
              alt="Fulfillment Center" 
              className="rounded-2xl shadow-brand w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Service Portfolio */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Leistungsportfolio</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
              <Users className="mb-4 text-printdev-cyan" size={32} />
              <h4 className="font-bold mb-3">Produktberatung</h4>
              <p className="text-sm text-muted-foreground">
                Durch unsere langjährige Erfahrung in Gestaltung, Material und Verkauf 
                unterstützen wir Sie aktiv beim Markenaufbau und der Produktplanung.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
              <Settings className="mb-4 text-printdev-orange" size={32} />
              <h4 className="font-bold mb-3">Umsetzung</h4>
              <p className="text-sm text-muted-foreground">
                Von textilen Merchandise bis Premiumboxen, Autoaufkleber, Keramik, 
                Glas und Holzprodukten - wir setzen Ihre Visionen um.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
              <Package className="mb-4 text-printdev-pink" size={32} />
              <h4 className="font-bold mb-3">Lagerung</h4>
              <p className="text-sm text-muted-foreground">
                Professionelle Lagerung auf über 4000m² mit moderner 
                Lagerverwaltung und klimatisierten Bereichen.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
              <Truck className="mb-4 text-printdev-teal" size={32} />
              <h4 className="font-bold mb-3">Versand</h4>
              <p className="text-sm text-muted-foreground">
                Schnelle und sichere Auslieferung weltweit mit verschiedenen 
                Versandoptionen und Tracking-Möglichkeiten.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
              <ShoppingCart className="mb-4 text-printdev-cyan" size={32} />
              <h4 className="font-bold mb-3">E-Commerce</h4>
              <p className="text-sm text-muted-foreground">
                Aufbau und Betreuung Ihres Onlineshops mit vollständiger 
                Abwicklung und Kundenservice.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
              <BarChart3 className="mb-4 text-printdev-orange" size={32} />
              <h4 className="font-bold mb-3">Analytik</h4>
              <p className="text-sm text-muted-foreground">
                Detaillierte Berichte und Analysen für optimale 
                Geschäftsentscheidungen und Wachstumsstrategien.
              </p>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <Card className="p-8 bg-gradient-to-r from-printdev-teal/10 to-printdev-cyan/10 border-printdev-teal/20 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-printdev-teal mb-2">4000m²</div>
              <p className="text-sm text-muted-foreground">Lager- und Bürofläche</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-printdev-cyan mb-2">80+</div>
              <p className="text-sm text-muted-foreground">Erfahrene Mitarbeiter</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-printdev-pink mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Service und Support</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-printdev-orange mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
            </div>
          </div>
        </Card>

        {/* Process Steps */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Unser Fulfillment-Prozess</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-printdev-cyan/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-printdev-cyan">1</span>
              </div>
              <h4 className="font-semibold mb-2">Beratung</h4>
              <p className="text-sm text-muted-foreground">Analyse Ihrer Anforderungen und Konzeptentwicklung</p>
            </div>
            
            <div className="text-center">
              <div className="bg-printdev-orange/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-printdev-orange">2</span>
              </div>
              <h4 className="font-semibold mb-2">Produktion</h4>
              <p className="text-sm text-muted-foreground">Herstellung und Qualitätskontrolle Ihrer Produkte</p>
            </div>
            
            <div className="text-center">
              <div className="bg-printdev-pink/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-printdev-pink">3</span>
              </div>
              <h4 className="font-semibold mb-2">Lagerung</h4>
              <p className="text-sm text-muted-foreground">Professionelle Einlagerung und Bestandsmanagement</p>
            </div>
            
            <div className="text-center">
              <div className="bg-printdev-teal/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-printdev-teal">4</span>
              </div>
              <h4 className="font-semibold mb-2">Versand</h4>
              <p className="text-sm text-muted-foreground">Schnelle Kommissionierung und weltweiter Versand</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="brand" size="lg">
            Fulfillment-Lösung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};