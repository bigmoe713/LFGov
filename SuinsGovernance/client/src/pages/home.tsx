import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import FinancialStats from "@/components/sections/financial-stats";
import Participate from "@/components/sections/participate";
import Resources from "@/components/sections/resources";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/layout/footer";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useEffect, useState } from "react";

export default function Home() {
  const sectionIds = ["about", "participate", "resources", "faq"];
  const activeSection = useScrollSpy(sectionIds, { offset: 100 });
  const [isConnected, setIsConnected] = useState(false);

  const handleWalletConnect = () => {
    setIsConnected(true);
  };
  
  useEffect(() => {
    document.title = "LFGov - SuiNS Governance Community";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        activeSection={activeSection} 
        isConnected={isConnected}
        onConnectWallet={handleWalletConnect}
      />
      <main className="space-y-4">
        <Hero onConnectWallet={handleWalletConnect} />
        <About />
        <Participate />
        <Resources />
        <FAQ />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
