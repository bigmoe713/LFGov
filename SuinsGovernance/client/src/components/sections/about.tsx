import { GOVERNANCE_FEATURES, GOVERNANCE_STRUCTURE } from "@/lib/constants";
import { Users, ShieldCheck, Clock, Sparkles, Check, Scale } from "lucide-react";

export default function About() {
  // Map for icon components
  const iconComponents = {
    Users: <Users className="h-6 w-6" />,
    ShieldCheck: <ShieldCheck className="h-6 w-6" />,
    Clock: <Clock className="h-6 w-6" />,
    Sparkles: <Sparkles className="h-6 w-6" />,
    Check: <Check className="h-6 w-6" />,
    Scale: <Scale className="h-6 w-6" />,
  };
  
  return (
    <section id="about" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-white tracking-wide uppercase">About</h2>
          <p className="mt-1 text-3xl font-bold text-white sm:text-4xl sm:tracking-tight">
            SuiNS Governance
          </p>
          <p className="max-w-xl mt-5 mx-auto text-base text-white/80">
            Learn how SuiNS is transitioning to community governance through the DAO model
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {GOVERNANCE_FEATURES.map((feature, index) => (
              <div key={index} className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
                <div className="absolute -top-3 -left-3">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                    {feature.icon === 'Users' && iconComponents.Users}
                    {feature.icon === 'ShieldCheck' && iconComponents.ShieldCheck}
                    {feature.icon === 'Clock' && iconComponents.Clock}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-medium text-white mt-4">{feature.title}</h3>
                  <p className="mt-3 text-white/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-primary-900/30 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20">
            <div className="px-6 py-10 sm:p-10">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Governance Structure
                  </h2>
                  <p className="mt-4 text-lg text-white/90">
                    The SuiNS DAO operates with a multi-tiered governance structure that balances efficiency with decentralization.
                  </p>
                  <div className="mt-6 space-y-4">
                    {GOVERNANCE_STRUCTURE.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white">
                            {item.icon === 'Sparkles' && iconComponents.Sparkles}
                            {item.icon === 'Check' && iconComponents.Check}
                            {item.icon === 'Scale' && iconComponents.Scale}
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-white">{item.title}</h3>
                          <p className="mt-2 text-white/80">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:pl-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-md shadow-lg border border-white/20">
                    <div className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-lg font-medium text-white">Protected by On-chain Governance</h3>
                      <p className="mt-2 text-white/80">All governance processes are transparent and secured by the Sui blockchain</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
