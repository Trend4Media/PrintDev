import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Palette, Zap, FileText, Ruler } from "lucide-react";
import printingFacility from "@/assets/printing-facility.jpg";

export const DTFPrinting = () => {
  return (
    <section id="dtf-printing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-printdev-cyan text-white">DTF PRINTING</Badge>
          <h2 className="text-4xl font-bold mb-4">DTF Drucke in Rekordzeit</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mit unserer vierfachen Druckkapazität bieten wir DTF-Drucke in Top-Qualität 
            und extrem schneller Lieferung - perfekt für Textilveredler und Wiederverkäufer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={printingFacility} 
              alt="DTF Printing Facility" 
              className="rounded-2xl shadow-brand w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Ihre Vorteile beim DTF-Druck</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-printdev-cyan mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold">Freie Größen ohne Verschachteln</h4>
                  <p className="text-muted-foreground text-sm">Keine Einschränkungen bei der Motivgröße</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Zap className="text-printdev-orange mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold">4x mehr Kapazität</h4>
                  <p className="text-muted-foreground text-sm">Schnellere Bearbeitung großer Aufträge</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Palette className="text-printdev-pink mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold">Optimiertes Farbprofil</h4>
                  <p className="text-muted-foreground text-sm">Deckendes Weiß und leuchtende Farben auf allen Textilfarben</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-printdev-teal mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold">Express-Lieferung</h4>
                  <p className="text-muted-foreground text-sm">Pünktliche Lieferung garantiert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
            <div className="text-center mb-4">
              <Ruler className="mx-auto mb-3 text-printdev-cyan" size={32} />
              <h3 className="font-bold text-lg">DTF Transfer Freie Größe</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>• Keine Größenbeschränkung</li>
              <li>• Automatische Preisberechnung</li>
              <li>• Perfekt für individuelle Motive</li>
              <li>• Weich und elastisch</li>
            </ul>
            <Button variant="cyan" className="w-full">
              Preise berechnen
            </Button>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
            <div className="text-center mb-4">
              <FileText className="mx-auto mb-3 text-printdev-orange" size={32} />
              <h3 className="font-bold text-lg">DTF Transfer DIN A4</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>• Standard A4 Format (210x297mm)</li>
              <li>• Optimiert für T-Shirts</li>
              <li>• Beste Preis-Leistung</li>
              <li>• Schnelle Bearbeitung</li>
            </ul>
            <Button variant="teal" className="w-full">
              A4 bestellen
            </Button>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card-custom hover:shadow-brand transition-all duration-300">
            <div className="text-center mb-4">
              <Zap className="mx-auto mb-3 text-printdev-pink" size={32} />
              <h3 className="font-bold text-lg">DTF Express</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>• Lieferung in 24-48h</li>
              <li>• Für dringende Aufträge</li>
              <li>• Gleiche Qualität</li>
              <li>• Prioritätsbehandlung</li>
            </ul>
            <Button variant="quote" className="w-full">
              Express anfragen
            </Button>
          </Card>
        </div>

        {/* Technical Specs */}
        <Card className="p-8 bg-gradient-to-r from-printdev-cyan/5 to-printdev-pink/5 border-printdev-cyan/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Technische Daten</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Material</h4>
              <p className="text-sm text-muted-foreground">Hochwertiges DTF-Film mit spezieller Beschichtung</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Auflösung</h4>
              <p className="text-sm text-muted-foreground">Bis zu 1440 DPI für gestochen scharfe Details</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Haltbarkeit</h4>
              <p className="text-sm text-muted-foreground">50+ Waschzyklen bei korrekter Anwendung</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Anwendung</h4>
              <p className="text-sm text-muted-foreground">Baumwolle, Polyester und Mischgewebe</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="brand" size="lg">
            DTF-Druck Angebot anfordern
          </Button>
        </div>
      </div>
    </section>
  );
};