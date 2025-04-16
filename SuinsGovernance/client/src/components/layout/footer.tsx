import { Link } from "wouter";
import { EXTERNAL_LINKS, FOOTER_LINKS } from "@/lib/constants";
import { Twitter, MessageCircleCode, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <div className="text-primary-500 font-bold text-2xl">
                <span className="text-[#2DD4BF]">LF</span>Gov
              </div>
            </Link>
            <p className="mt-4 text-base text-gray-600">
              The community hub for SuiNS governance participation.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href={EXTERNAL_LINKS.SUINS_TWITTER} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href={EXTERNAL_LINKS.SUINS_DISCORD} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">MessageCircleCode</span>
                <MessageCircleCode className="h-6 w-6" />
              </a>
              <a 
                href={EXTERNAL_LINKS.SUINS_GITHUB} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                {category}
              </h3>
              <ul className="mt-4 space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      target={link.href.startsWith('http') ? "_blank" : undefined}
                      rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-base text-gray-600 hover:text-gray-800"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} LFGov - SuiNS Governance Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
