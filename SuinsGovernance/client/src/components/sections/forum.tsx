import { FORUM_TOPICS, EXTERNAL_LINKS } from "@/lib/constants";

export default function Forum() {
  const getTagColorClass = (color: string) => {
    const classes = {
      purple: "bg-purple-100 text-purple-800",
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      yellow: "bg-yellow-100 text-yellow-800",
      indigo: "bg-indigo-100 text-indigo-800",
      gray: "bg-gray-100 text-gray-800",
    };
    return classes[color as keyof typeof classes] || "bg-gray-100 text-gray-800";
  };
  
  const getStatusColorClass = (color: string) => {
    const classes = {
      primary: "bg-primary-50 text-primary-700",
      green: "bg-green-50 text-green-700",
      gray: "bg-gray-50 text-gray-700",
    };
    return classes[color as keyof typeof classes] || "bg-gray-50 text-gray-700";
  };
  
  return (
    <section id="forum" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-white tracking-wide uppercase">Community Forum</h2>
          <p className="mt-1 text-3xl font-bold text-white sm:text-4xl sm:tracking-tight">
            Join the Conversation
          </p>
          <p className="max-w-xl mt-5 mx-auto text-base text-white/80">
            Connect with the community, discuss governance proposals, and share your ideas for SuiNS
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white/10 backdrop-blur-sm shadow-md rounded-lg overflow-hidden border border-white/20">
            <div className="divide-y divide-white/20">
              {/* Forum Header */}
              <div className="px-6 py-5 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-white">Recent Discussions</h3>
                  <p className="text-sm text-white/80">From the SuiNS governance forum</p>
                </div>
                <a 
                  href={EXTERNAL_LINKS.SUINS_FORUM} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 border-2 border-primary-600 text-sm font-bold rounded-md shadow-md text-primary-800 bg-white hover:bg-gray-100 focus:outline-none transition-colors"
                >
                  View Full Forum
                </a>
              </div>

              {/* Forum Topics */}
              <div className="divide-y divide-white/20">
                {FORUM_TOPICS.length > 0 ? (
                  FORUM_TOPICS.map((topic, index) => (
                    <div key={index} className="px-6 py-4 flex items-start space-x-4">
                      {/* Topic content */}
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-12 text-center">
                    <p className="text-white/80">No forum topics available at this time.</p>
                    <a 
                      href={EXTERNAL_LINKS.SUINS_FORUM} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-white hover:text-white/80"
                    >
                      Visit the SuiNS forum to see the latest discussions
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20">
          <div className="px-6 py-12 sm:p-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Create Your Own Proposal
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  Have an idea for improving SuiNS? Start a discussion in the forum to get community feedback.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href={EXTERNAL_LINKS.SUINS_FORUM} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-5 py-3 border-2 border-primary-600 text-base font-bold rounded-md shadow-md text-primary-800 bg-white hover:bg-gray-100 focus:outline-none transition-colors"
                  >
                    Start a Discussion
                  </a>
                  <a 
                    href={EXTERNAL_LINKS.SUINS_PROPOSALS} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-5 py-3 border-2 border-white text-base font-bold rounded-md text-white bg-transparent hover:bg-white/10 shadow-md transition-colors"
                  >
                    Proposal Guidelines
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
                  <h3 className="text-lg font-medium text-white">Proposal Lifecycle</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-center">
                      <div className="bg-white text-primary-800 rounded-full h-6 w-6 flex items-center justify-center font-medium text-sm mr-3">1</div>
                      <span className="text-white">Discussion & Feedback</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-white text-primary-800 rounded-full h-6 w-6 flex items-center justify-center font-medium text-sm mr-3">2</div>
                      <span className="text-white">Formal Proposal Draft</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-white text-primary-800 rounded-full h-6 w-6 flex items-center justify-center font-medium text-sm mr-3">3</div>
                      <span className="text-white">Technical Review</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-white text-primary-800 rounded-full h-6 w-6 flex items-center justify-center font-medium text-sm mr-3">4</div>
                      <span className="text-white">Community Vote</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-white text-primary-800 rounded-full h-6 w-6 flex items-center justify-center font-medium text-sm mr-3">5</div>
                      <span className="text-white">Implementation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
