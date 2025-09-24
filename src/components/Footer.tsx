import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/logo.jpg" 
              alt="Printdev Logo" 
              className="h-8 w-auto mb-4 brightness-0 invert"
              onError={(e) => {
                // Fallback to placeholder if logo fails to load
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
            <p className="text-sm text-primary-foreground/80 mb-4">
              Ihr Partner für professionelle DTF-Drucke und komplette Fulfillment-Lösungen. 
              Von der Idee bis zur Lieferung - alles aus einer Hand.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-printdev-cyan/20">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-printdev-cyan/20">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-printdev-cyan/20">
                <Linkedin size={18} />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#dtf-printing" className="hover:text-printdev-cyan transition-colors">DTF Printing</a></li>
              <li><a href="#fulfillment" className="hover:text-printdev-cyan transition-colors">Fulfillment</a></li>
              <li><a href="#" className="hover:text-printdev-cyan transition-colors">Produktberatung</a></li>
              <li><a href="#" className="hover:text-printdev-cyan transition-colors">E-Commerce Lösungen</a></li>
              <li><a href="#" className="hover:text-printdev-cyan transition-colors">Express Service</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-printdev-cyan transition-colors">Über uns</a></li>
              <li><a href="#contact" className="hover:text-printdev-cyan transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-printdev-cyan transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-printdev-cyan transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-printdev-cyan transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-printdev-cyan transition-colors">AGB</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-printdev-cyan" />
                <span>+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-printdev-cyan" />
                <span>info@printdev.de</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-printdev-cyan mt-1 flex-shrink-0" />
                <div>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                </div>
              </div>
            </div>
            <Button variant="quote" size="sm" className="mt-4 w-full">
              Angebot anfordern
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>© 2024 Printdev GmbH. Alle Rechte vorbehalten.</p>
          <p className="mt-2 md:mt-0">
            Designed with ❤️ für maximalen Erfolg
          </p>
        </div>
      </div>
    </footer>
  );
};