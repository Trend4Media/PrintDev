import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Kontakt aufnehmen</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? 
            Wir sind für Sie da!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Phone className="mb-4 text-printdev-cyan" size={32} />
            <h3 className="font-bold mb-2">Telefon</h3>
            <p className="text-white/90 mb-2">+49 (0) 123 456 789</p>
            <p className="text-sm text-white/70">Mo-Fr: 08:00 - 18:00 Uhr</p>
            <Button variant="cyan" size="sm" className="mt-4 w-full">
              Jetzt anrufen
            </Button>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <MessageSquare className="mb-4 text-printdev-pink" size={32} />
            <h3 className="font-bold mb-2">WhatsApp Service</h3>
            <p className="text-white/90 mb-2">Schnelle Hilfe und Beratung</p>
            <p className="text-sm text-white/70">Mo-Fr: 10:00 - 15:30 Uhr</p>
            <Button variant="quote" size="sm" className="mt-4 w-full">
              WhatsApp öffnen
            </Button>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Mail className="mb-4 text-printdev-orange" size={32} />
            <h3 className="font-bold mb-2">E-Mail</h3>
            <p className="text-white/90 mb-2">info@printdev.de</p>
            <p className="text-sm text-white/70">Antwort binnen 24h</p>
            <Button variant="hero" size="sm" className="mt-4 w-full">
              E-Mail senden
            </Button>
          </Card>
        </div>

        {/* Company Info */}
        <Card className="mt-8 p-8 bg-white/5 backdrop-blur-sm border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Printdev GmbH</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-printdev-cyan mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p>Musterstraße 123</p>
                    <p>12345 Musterstadt</p>
                    <p>Deutschland</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="text-printdev-orange flex-shrink-0" size={20} />
                  <div>
                    <p>Geschäftszeiten:</p>
                    <p className="text-sm text-white/80">Mo-Fr: 08:00 - 18:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-white font-bold mb-4">Bereit für Ihr Projekt?</h4>
              <Button variant="brand" size="lg" className="w-full">
                Kostenloses Beratungsgespräch vereinbaren
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-1">&lt; 24h</div>
            <p className="text-white/70 text-sm">Antwortzeit</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">500+</div>
            <p className="text-white/70 text-sm">Zufriedene Kunden</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">99%</div>
            <p className="text-white/70 text-sm">Pünktliche Lieferung</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">15+</div>
            <p className="text-white/70 text-sm">Jahre Erfahrung</p>
          </div>
        </div>
      </div>
    </section>
  );
};