import { Button } from "@/components/ui/button";
import { PARTICIPATION_STEPS, ADVANCED_PARTICIPATION } from "@/lib/constants";
import { PenLine, Code, MessageSquare, Building } from "lucide-react";

export default function Participate() {
  // Map for icon components
  const iconComponents = {
    PenLine: <PenLine className="h-10 w-10 text-primary-700 p-1 bg-primary-100 rounded-full" />,
    Code: <Code className="h-10 w-10 text-primary-700 p-1 bg-primary-100 rounded-full" />,
    MessageSquare: <MessageSquare className="h-10 w-10 text-primary-700 p-1 bg-primary-100 rounded-full" />,
    Building: <Building className="h-10 w-10 text-primary-700 p-1 bg-primary-100 rounded-full" />,
  };
  
  return (
    <section id="participate" className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-white tracking-wide uppercase">Participate</h2>
          <p className="mt-0 text-3xl font-bold text-white sm:text-4xl sm:tracking-tight">
            How to Get Involved
          </p>
          <p className="max-w-xl mt-3 mx-auto text-base text-white/80">
            There are multiple ways to participate in SuiNS governance based on your interests and expertise
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            <div className="relative max-w-7xl mx-auto">
              <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {PARTICIPATION_STEPS.map((step) => (
                  <div key={step.number} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-1 bg-white/10 backdrop-blur-sm p-6 flex flex-col justify-between border border-white/20">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white font-bold text-lg border-2 border-primary-400 shadow-md">
                            {step.number}
                          </div>
                          <h3 className="ml-3 text-xl font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-3 text-base text-white/80">
                          {step.description}
                        </p>
                      </div>
                      <div className="mt-6">
                        <a 
                          href={step.cta.link} 
                          target={step.cta.link.startsWith('http') ? "_blank" : undefined}
                          rel={step.cta.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center px-4 py-2 border-2 border-primary-600 text-sm font-bold rounded-md shadow-md text-primary-800 bg-white hover:bg-gray-100 focus:outline-none transition-colors"
                        >
                          {step.cta.text}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-primary-900/30 backdrop-blur-sm rounded-lg shadow-md overflow-hidden border border-white/20">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <h3 className="text-lg leading-6 font-medium text-white">
                Advanced Participation
              </h3>
              <div className="mt-4 max-w-2xl mx-auto text-base text-white/80">
                <p>Ready to take your involvement to the next level? Here are additional ways to contribute to SuiNS governance.</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {ADVANCED_PARTICIPATION.map((item, index) => (
                  <div key={index} className="border border-white/20 rounded-md p-6 bg-white/10 hover:bg-white/20 transition-colors shadow-md">
                    <div className="text-center">
                      {item.icon === 'PenLine' && <PenLine className="h-8 w-8 text-white p-1 bg-primary-600/50 rounded-full mx-auto" />}
                      {item.icon === 'Code' && <Code className="h-8 w-8 text-white p-1 bg-primary-600/50 rounded-full mx-auto" />}
                      {item.icon === 'MessageSquare' && <MessageSquare className="h-8 w-8 text-white p-1 bg-primary-600/50 rounded-full mx-auto" />}
                      {item.icon === 'Building' && <Building className="h-8 w-8 text-white p-1 bg-primary-600/50 rounded-full mx-auto" />}
                      <h3 className="mt-3 text-sm font-medium text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
