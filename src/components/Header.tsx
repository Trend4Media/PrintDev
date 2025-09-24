import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="Printdev Logo" 
              className="h-12 w-auto object-contain"
              onLoad={() => console.log('Logo loaded successfully')}
              onError={(e) => console.log('Logo failed to load:', e)}
            />
            <span className="text-xl font-bold text-foreground hidden sm:block">
              Printdev
            </span>
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
            <Button variant="quote" size="sm" asChild>
              <a href="#angebot">Angebot anfordern</a>
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
              <Button variant="quote" size="sm" className="w-fit" asChild>
                <a href="#angebot" onClick={() => setIsMenuOpen(false)}>
                  Angebot anfordern
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};