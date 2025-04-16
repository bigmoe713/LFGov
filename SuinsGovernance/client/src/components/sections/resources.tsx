import { Button } from "@/components/ui/button";
import { RESOURCES, EXTERNAL_LINKS } from "@/lib/constants";
import { FileText, File, Briefcase, BadgeCheck } from "lucide-react";

export default function Resources() {
  // Map for icon components
  const iconComponents = {
    FileText: <FileText className="h-8 w-8 text-primary-600" />,
    File: <File className="h-8 w-8 text-primary-600" />,
    Briefcase: <Briefcase className="h-8 w-8 text-primary-600" />,
    BadgeCheck: <BadgeCheck className="h-8 w-8 text-primary-600" />,
  };
  
  return (
    <section id="resources" className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-white tracking-wide uppercase">Resources</h2>
          <p className="mt-0 text-3xl font-bold text-white sm:text-4xl sm:tracking-tight">
            Governance Documentation
          </p>
          <p className="max-w-xl mt-3 mx-auto text-base text-white/80">
            Explore comprehensive resources to understand and participate in SuiNS governance
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/20 overflow-hidden divide-y divide-white/20">
            {RESOURCES.map((resource, index) => (
              <div key={index} className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {resource.icon === 'FileText' && <FileText className="h-8 w-8 text-white" />}
                    {resource.icon === 'File' && <File className="h-8 w-8 text-white" />}
                    {resource.icon === 'Briefcase' && <Briefcase className="h-8 w-8 text-white" />}
                    {resource.icon === 'BadgeCheck' && <BadgeCheck className="h-8 w-8 text-white" />}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-white">{resource.title}</h3>
                    <p className="mt-1 text-sm text-white/80">
                      {resource.description}
                    </p>
                    <div className="mt-3">
                      <a 
                        href={resource.link.url} 
                        target={resource.link.url.startsWith('http') ? "_blank" : undefined}
                        rel={resource.link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center px-3 py-1.5 border-2 border-primary-600 text-xs font-bold rounded-md bg-white text-primary-800 hover:bg-gray-100 focus:outline-none shadow-md"
                      >
                        {resource.link.text}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a 
            href={EXTERNAL_LINKS.SUINS_DOCS} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-5 py-3 border-2 border-primary-600 text-base font-bold rounded-md text-primary-800 bg-white hover:bg-gray-100 shadow-md transition-colors"
          >
            View All Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
