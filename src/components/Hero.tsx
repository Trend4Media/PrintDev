import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Package, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-printdev-teal/10 via-printdev-cyan/15 to-printdev-orange/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--printdev-teal)/0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--printdev-cyan)/0.12),transparent_50%)]"></div>
      
      {/* Geometric Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-printdev-teal/30 rotate-45"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-printdev-cyan/20 to-transparent rounded-lg rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              DTF Druck &{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Versand
              </span>
              <br />
              Service
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Professionelle DTF-Drucke in höchster Qualität mit schnellem Versand direkt zu Ihnen. 
              Einfach, zuverlässig und termingerecht.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="quote" size="lg" className="text-lg" asChild>
                <a href="#angebot">
                  Kostenloses Angebot anfordern
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button variant="hero" size="lg" className="text-lg">
                Services entdecken
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-printdev-cyan/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Zap className="text-printdev-cyan" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-1">Schnelle Lieferung</h3>
                <p className="text-white/80 text-sm">DTF-Drucke in Rekordzeit</p>
              </div>
              
              <div className="text-center">
                <div className="bg-printdev-teal/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Package className="text-printdev-teal" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-1">Direktversand</h3>
                <p className="text-white/80 text-sm">Schnell zu Ihnen</p>
              </div>
              
              <div className="text-center">
                <div className="bg-printdev-orange/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-printdev-orange" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-1">24/7 Service</h3>
                <p className="text-white/80 text-sm">Persönlicher Support</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Ihre Vorteile</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-white">
                    <div className="w-2 h-2 bg-gradient-brand rounded-full mr-3"></div>
                    Freie Größen ohne Verschachteln
                  </li>
                  <li className="flex items-center text-white">
                    <div className="w-2 h-2 bg-gradient-brand rounded-full mr-3"></div>
                    4x mehr Druckkapazität
                  </li>
                  <li className="flex items-center text-white">
                    <div className="w-2 h-2 bg-gradient-brand rounded-full mr-3"></div>
                    Express-Versand deutschlandweit
                  </li>
                  <li className="flex items-center text-white">
                    <div className="w-2 h-2 bg-gradient-brand rounded-full mr-3"></div>
                    Professionelle Produktberatung
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-printdev-pink/20 rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-printdev-cyan/20 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-printdev-orange/20 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
    </section>
  );
};