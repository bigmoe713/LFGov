import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { ArrowRight, TrendingUp, Users, Shield } from "lucide-react";
import FinancialStats from "./financial-stats";

interface HeroProps {
  onConnectWallet: () => void;
}

export default function Hero({ onConnectWallet }: HeroProps) {
  return (
    <section className="pt-6 pb-2 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-primary-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-primary-800 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-0 sm:pt-6 sm:pb-0 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl">
            <span className="block">Shape the future of</span>
            <span className="block text-white">SuiNS Governance</span>
          </h1>
          <p className="mt-6 text-base text-white/90 sm:text-lg max-w-3xl mx-auto">
            LFGov is the community hub for everyone interested in participating in the SuiNS decentralized governance program. Learn, connect, and contribute to the evolution of Sui Name Service.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-white/90 text-sm">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-md">
              <h3 className="font-semibold text-white text-base mb-2">Community-Driven Decisions</h3>
              <p>Join a vibrant community of SuiNS name holders who collectively shape protocol improvements, fee structures, and governance parameters through transparent on-chain voting.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-md">
              <h3 className="font-semibold text-white text-base mb-2">Decentralized Name Service</h3>
              <p>SuiNS provides human-readable names for blockchain addresses on the Sui network, allowing for easier transfers, dApp interactions, and wallet identification.</p>
            </div>
          </div>
          
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 py-5 px-4 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-2 bg-primary-600/40 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">395k</p>
                <p className="text-sm text-white/80 mt-1">Total Names Generated</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 bg-primary-600/40 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">155k</p>
                <p className="text-sm text-white/80 mt-1">Total Subnames Created</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 bg-primary-600/40 p-2 rounded-full">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">90k</p>
                <p className="text-sm text-white/80 mt-1">Discord Community</p>
              </div>
            </div>
          </div>
          
          {/* Financial Stats Component */}
          <FinancialStats />
          
          <div className="mt-6 mb-2 max-w-md mx-auto flex flex-col sm:flex-row justify-center gap-4">
            <a href="#participate" className="flex items-center justify-center px-5 py-3 border-2 border-primary-600 text-base font-bold rounded-md text-primary-800 bg-white hover:bg-gray-100 shadow-md transition-colors">
              Get Started
            </a>
            <a href={EXTERNAL_LINKS.SUINS_DISCORD} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-5 py-3 border-2 border-primary-600 text-base font-bold rounded-md text-primary-800 bg-white hover:bg-primary-50 shadow-md transition-colors">
              Join Discord <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
