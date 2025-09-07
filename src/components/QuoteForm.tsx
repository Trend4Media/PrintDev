import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, FileText } from "lucide-react";

export const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Angebot angefordert!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="mx-auto mb-4 text-printdev-cyan" size={48} />
            <h2 className="text-4xl font-bold mb-4">Angebot anfordern</h2>
            <p className="text-xl text-muted-foreground">
              Erhalten Sie ein individuelles Angebot für Ihre DTF-Druck oder Fulfillment-Anfrage
            </p>
          </div>

          <Card className="p-8 bg-gradient-card shadow-card-custom">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Firma</Label>
                  <Input id="company" placeholder="Ihr Firmenname" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Ihr Name" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" placeholder="ihre@email.de" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" type="tel" placeholder="+49 123 456789" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Gewünschter Service</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Service auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dtf-printing">DTF Printing</SelectItem>
                    <SelectItem value="fulfillment">Fulfillment Services</SelectItem>
                    <SelectItem value="both">DTF + Fulfillment Kombination</SelectItem>
                    <SelectItem value="consultation">Beratungsgespräch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Projektbeschreibung</Label>
                <Textarea 
                  id="message" 
                  placeholder="Beschreiben Sie Ihr Projekt: Produkttyp, Mengen, besondere Anforderungen..."
                  className="min-h-32"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Geschätzte Menge</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Menge auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 Stück</SelectItem>
                      <SelectItem value="51-200">51-200 Stück</SelectItem>
                      <SelectItem value="201-500">201-500 Stück</SelectItem>
                      <SelectItem value="501-1000">501-1000 Stück</SelectItem>
                      <SelectItem value="1000+">1000+ Stück</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeline">Gewünschter Liefertermin</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Zeitrahmen auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">So schnell wie möglich</SelectItem>
                      <SelectItem value="1-week">Innerhalb 1 Woche</SelectItem>
                      <SelectItem value="2-weeks">Innerhalb 2 Wochen</SelectItem>
                      <SelectItem value="1-month">Innerhalb 1 Monat</SelectItem>
                      <SelectItem value="flexible">Flexibel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="brand" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Wird versendet..."
                ) : (
                  <>
                    Angebot anfordern
                    <Send className="ml-2" size={20} />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 p-6 bg-printdev-cyan/5 rounded-lg border border-printdev-cyan/20">
              <h3 className="font-bold text-printdev-teal mb-2">Was passiert als nächstes?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Wir prüfen Ihre Anfrage innerhalb von 24 Stunden</li>
                <li>• Sie erhalten ein detailliertes, individuelles Angebot</li>
                <li>• Bei Bedarf vereinbaren wir ein persönliches Beratungsgespräch</li>
                <li>• Nach Ihrer Bestätigung starten wir sofort mit der Umsetzung</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};