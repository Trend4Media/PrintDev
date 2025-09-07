import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/8b5cd286-e45e-4ffe-ad31-88b3d4a31ee1.png" 
              alt="Printdev Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-printdev-cyan transition-colors">
              Services
            </a>
            <a href="#dtf-printing" className="text-foreground hover:text-printdev-cyan transition-colors">
              DTF Printing
            </a>
            <a href="#fulfillment" className="text-foreground hover:text-printdev-cyan transition-colors">
              Fulfillment
            </a>
            <a href="#contact" className="text-foreground hover:text-printdev-cyan transition-colors">
              Kontakt
            </a>
            <Button variant="quote" size="sm">
              Angebot anfordern
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-foreground hover:text-printdev-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#dtf-printing" 
                className="text-foreground hover:text-printdev-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                DTF Printing
              </a>
              <a 
                href="#fulfillment" 
                className="text-foreground hover:text-printdev-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fulfillment
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-printdev-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <Button variant="quote" size="sm" className="w-fit">
                Angebot anfordern
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};