import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { DTFPrinting } from "@/components/DTFPrinting";
import { Fulfillment } from "@/components/Fulfillment";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <DTFPrinting />
      <Fulfillment />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
