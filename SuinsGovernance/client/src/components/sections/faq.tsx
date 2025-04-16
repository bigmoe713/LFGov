import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EXTERNAL_LINKS, FAQ_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-white tracking-wide uppercase">FAQ</h2>
          <p className="mt-1 text-3xl font-bold text-white sm:text-4xl sm:tracking-tight">
            Frequently Asked Questions
          </p>
          <p className="max-w-xl mt-5 mx-auto text-base text-white/80">
            Common questions about SuiNS governance and how to participate
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white/10 backdrop-blur-sm shadow-md rounded-lg divide-y divide-white/20 border border-white/20">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="p-6">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full font-medium text-left focus:outline-none"
                >
                  <span className="text-lg text-white">{item.question}</span>
                  <span className={`transition-transform duration-200 ${openItems.has(index) ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-white" />
                  </span>
                </button>
                <div className={`mt-3 text-white/80 text-sm ${openItems.has(index) ? 'block' : 'hidden'}`}>
                  <p className="whitespace-pre-line">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-white">Still have questions?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a 
              href={EXTERNAL_LINKS.SUINS_DISCORD} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-5 py-3 border-2 border-primary-600 text-base font-bold rounded-md text-primary-800 bg-white hover:bg-gray-100 shadow-md transition-colors"
            >
              Join Discord
            </a>
            <a 
              href={EXTERNAL_LINKS.SUINS_DOCS} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-5 py-3 border-2 border-white text-base font-bold rounded-md text-white bg-transparent hover:bg-white/10 shadow-md transition-colors"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
