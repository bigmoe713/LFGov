import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types";
import { Link } from "wouter";
import { X, Menu } from "lucide-react";

interface NavbarProps {
  activeSection: string | null;
  isConnected?: boolean;
  onConnectWallet?: () => void;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Participate", href: "#participate" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
  { label: "Docs", href: "https://docs.suins.io/dao", external: true },
];

export default function Navbar({ activeSection, isConnected, onConnectWallet }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-200 ${isScrolled ? "bg-transparent backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-14">
          <div className="flex items-center justify-between w-full md:w-auto md:justify-center">
            <Link href="/" className="flex items-center">
              <div className="font-bold text-sm flex items-center">
                <span className="text-white">LF</span>
                <span className="text-white">Gov</span>
                <span className="h-4 w-px mx-2 bg-white/80"></span>
                <span className="text-xs font-medium text-white/90">SuiNS Governance</span>
              </div>
            </Link>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-1 rounded-md text-white hover:text-white hover:bg-primary-700/50 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-4 w-4" />
                ) : (
                  <Menu className="block h-4 w-4" />
                )}
              </button>
            </div>
            
            {/* Desktop Navigation - Immediately next to the logo */}
            <nav className="hidden md:flex items-center ml-10">
              <div className="flex items-center space-x-5">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                      activeSection === item.href.replace('#', '') 
                        ? "text-white font-bold" 
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
          {/* End of navbar components */}
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1 border-t border-white/30 bg-primary-800/90 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`block px-3 py-2 text-base font-medium ${
                activeSection === item.href.replace('#', '') 
                  ? "text-white font-semibold" 
                  : "text-white/80 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
