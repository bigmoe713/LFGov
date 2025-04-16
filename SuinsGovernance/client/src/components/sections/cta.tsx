import { EXTERNAL_LINKS } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to participate?</span>
          <span className="block text-white/80 font-bold">Join the SuiNS governance community today.</span>
        </h2>
        <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex">
            <a 
              href={EXTERNAL_LINKS.SUINS_WEBSITE} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-base font-bold rounded-md text-primary-800 bg-white hover:bg-gray-100 shadow-md transition-colors"
            >
              Get a SuiNS Name
            </a>
          </div>
          <div className="inline-flex">
            <a 
              href={EXTERNAL_LINKS.SUINS_DISCORD} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-bold rounded-md text-white bg-transparent hover:bg-white/10 shadow-md transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
