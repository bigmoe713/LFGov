import { useSuiFinancialData } from "@/hooks/use-sui-financial-data";
import { CoinsIcon, ExternalLink, Wallet, Loader2, DollarSign, CircleDollarSign, CandlestickChart, Plus, ChevronsRight } from "lucide-react";

// Explorer base URL - using SuiVision instead
const EXPLORER_URL = "https://suivision.xyz/object/";

export default function FinancialStats() {
  const { 
    aeonTreasury, 
    suiNsTreasury, 
    usdcBalance,
    nsBalance,
    suiBalance,
    totalSuiBalance,
    loadingData, 
    error,
    // Object IDs for links
    aeonTreasuryId,
    suiNsTreasuryId,
    usdcBalanceId,
    nsBalanceId,
    suiBalanceId
  } = useSuiFinancialData();

  // Helper to format and render a value with optional link
  const ValueWithLink = ({ value, objectId, currency = "" }: { value: string, objectId: string, currency?: string }) => (
    <a 
      href={`${EXPLORER_URL}${objectId}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center justify-center hover:underline"
    >
      <span className="text-white group-hover:text-primary-200">{value} {currency}</span>
      <ExternalLink className="h-3 w-3 ml-1 text-white/60 group-hover:text-primary-200" />
    </a>
  );

  return (
    <section id="treasury" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-white">Treasury</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Live financial data from the SuiNS treasury on the Sui blockchain
          </p>
        </div>
        
        <div className="mt-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 py-5 px-4 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            {/* Treasury Account 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-2 bg-primary-600/40 p-2 rounded-full">
                <CoinsIcon className="h-5 w-5 text-white" />
              </div>
              
              {loadingData ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                  <p className="text-sm text-white/80">Loading...</p>
                </div>
              ) : error ? (
                <p className="text-xs text-red-300">Failed to load data</p>
              ) : (
                <>
                  <p className="text-2xl font-bold">
                    <ValueWithLink 
                      value={suiNsTreasury} 
                      objectId={suiNsTreasuryId}
                      currency="SUI" 
                    />
                  </p>
                  <p className="text-sm text-white/80 mt-1">Treasury Account 1</p>
                </>
              )}
            </div>
            
            {/* Treasury Account 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-2 bg-primary-600/40 p-2 rounded-full">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              
              {loadingData ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                  <p className="text-sm text-white/80">Loading...</p>
                </div>
              ) : error ? (
                <p className="text-xs text-red-300">Failed to load data</p>
              ) : (
                <>
                  <p className="text-2xl font-bold">
                    <ValueWithLink 
                      value={suiBalance} 
                      objectId={suiBalanceId}
                      currency="SUI" 
                    />
                  </p>
                  <p className="text-sm text-white/80 mt-1">Treasury Account 2</p>
                </>
              )}
            </div>

            {/* Total SUI */}
            <div className="flex flex-col items-center">
              <div className="mb-2 bg-primary-600/40 p-2 rounded-full">
                <ChevronsRight className="h-5 w-5 text-white" />
              </div>
              
              {loadingData ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                  <p className="text-sm text-white/80">Loading...</p>
                </div>
              ) : error ? (
                <p className="text-xs text-red-300">Failed to load data</p>
              ) : (
                <>
                  <div className="flex items-center text-2xl font-bold">
                    <span className="text-white">{totalSuiBalance} SUI</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1">Total SUI Holdings</p>
                </>
              )}
            </div>
          </div>
          
          {/* Additional balances */}
          <div className="pt-2 pb-1 border-t border-white/10">
            <h4 className="text-center text-xs font-medium text-white/80 mb-2">Additional Treasury Balances</h4>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              {/* AEON Balance */}
              <div className="flex flex-col items-center">
                <div className="mb-2 bg-primary-600/40 p-2 rounded-full">
                  <CoinsIcon className="h-5 w-5 text-white" />
                </div>
                
                {loadingData ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                    <p className="text-sm text-white/80">Loading...</p>
                  </div>
                ) : (
                  <>
                    <p className="text-2xl font-bold">
                      <ValueWithLink 
                        value={aeonTreasury} 
                        objectId={aeonTreasuryId}
                        currency="SUI" 
                      />
                    </p>
                    <p className="text-sm text-white/80 mt-1">AEON Revenue</p>
                  </>
                )}
              </div>
              
              {/* NS Balance */}
              <div className="flex flex-col items-center">
                <div className="mb-2 bg-primary-600/40 p-2 rounded-full">
                  <CandlestickChart className="h-5 w-5 text-white" />
                </div>
                
                {loadingData ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                    <p className="text-sm text-white/80">Loading...</p>
                  </div>
                ) : (
                  <>
                    <p className="text-2xl font-bold">
                      <ValueWithLink 
                        value={nsBalance} 
                        objectId={nsBalanceId}
                        currency="NS" 
                      />
                    </p>
                    <p className="text-sm text-white/80 mt-1">NS Token</p>
                  </>
                )}
              </div>
              
              {/* USDC Balance */}
              <div className="flex flex-col items-center">
                <div className="mb-2 bg-primary-600/40 p-2 rounded-full">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                
                {loadingData ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                    <p className="text-sm text-white/80">Loading...</p>
                  </div>
                ) : (
                  <>
                    <p className="text-2xl font-bold">
                      <ValueWithLink 
                        value={usdcBalance} 
                        objectId={usdcBalanceId}
                        currency="USDC" 
                      />
                    </p>
                    <p className="text-sm text-white/80 mt-1">Stablecoin</p>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Small disclaimer */}
          <div className="mt-3 text-center">
            <p className="text-xs text-white/60">
              Live data from Sui blockchain (updated at 12pm UTC daily)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}