import { useState, useEffect } from 'react';
import { SuiClient } from '@mysten/sui/client';

// Object IDs for Treasury Balances
const AEON_TREASURY_OBJECT_ID = '0xecd6ff59119adb34f0e7c4ba57534f1e2e14cc524e319926af9b73cfe9362e18';
const SUINS_TREASURY_OBJECT_ID = '0x6e0ddefc0ad98889c04bab9639e512c21766c5e6366f89e696956d9be6952871';

// Treasury balances in different currencies
const NS_TREASURY_OBJECT_ID = '0x15842c6ed94d1f93e51bd9c324aa07c0a80e017406455383fce0b9132276e69f';
const USDC_TREASURY_OBJECT_ID = '0x451766ec55fb9df787eb37c2ead273fdba067da043c88cbe4866f2ddf33a1338';
const SUI_TREASURY_OBJECT_ID = '0xbe847f00db9c9816222024e50e9024c18afc910c682a47026873527e102c132c';

// Divisors for different currencies
const SUI_DIVISOR = 1000000000; // 9 decimals for SUI
const USDC_DIVISOR = 1000000;   // 6 decimals for USDC
const NS_DIVISOR = 1000000;     // 6 decimals for NS (per user request)

// RPC URL for Sui mainnet
const RPC_URL = 'https://fullnode.mainnet.sui.io:443'; 

interface FinancialData {
  aeonTreasury: string;
  suiNsTreasury: string;
  usdcBalance: string;
  nsBalance: string;
  suiBalance: string;
  totalSuiBalance: string;
  loadingData: boolean;
  error: string | null;
  // Added object IDs for links
  aeonTreasuryId: string;
  suiNsTreasuryId: string;
  usdcBalanceId: string;
  nsBalanceId: string;
  suiBalanceId: string;
}

export function useSuiFinancialData(): FinancialData {
  const [data, setData] = useState<FinancialData>({
    aeonTreasury: '0',
    suiNsTreasury: '0',
    usdcBalance: '0',
    nsBalance: '0',
    suiBalance: '0',
    totalSuiBalance: '0',
    loadingData: true,
    error: null,
    // Include the object IDs
    aeonTreasuryId: AEON_TREASURY_OBJECT_ID,
    suiNsTreasuryId: SUINS_TREASURY_OBJECT_ID,
    usdcBalanceId: USDC_TREASURY_OBJECT_ID,
    nsBalanceId: NS_TREASURY_OBJECT_ID,
    suiBalanceId: SUI_TREASURY_OBJECT_ID
  });

  useEffect(() => {
    // Function to calculate milliseconds until next 12PM UTC
    const getMillisecondsUntil12PMUTC = () => {
      const now = new Date();
      const targetTime = new Date(now);
      
      // Set target time to 12:00:00 UTC
      targetTime.setUTCHours(12, 0, 0, 0);
      
      // If it's already past 12PM UTC today, set for tomorrow
      if (now.getTime() > targetTime.getTime()) {
        targetTime.setDate(targetTime.getDate() + 1);
      }
      
      return targetTime.getTime() - now.getTime();
    };
    
    async function fetchData() {
      try {
        // Create a Sui client
        const client = new SuiClient({ url: RPC_URL });

        // Fetch all the treasury objects
        const [
          aeonTreasuryResponse, 
          suiNsTreasuryResponse,
          usdcTreasuryResponse,
          nsTreasuryResponse,
          suiTreasuryResponse
        ] = await Promise.all([
          client.getObject({
            id: AEON_TREASURY_OBJECT_ID,
            options: { showContent: true }
          }),
          client.getObject({
            id: SUINS_TREASURY_OBJECT_ID,
            options: { showContent: true }
          }),
          client.getObject({
            id: USDC_TREASURY_OBJECT_ID,
            options: { showContent: true }
          }),
          client.getObject({
            id: NS_TREASURY_OBJECT_ID,
            options: { showContent: true }
          }),
          client.getObject({
            id: SUI_TREASURY_OBJECT_ID,
            options: { showContent: true }
          })
        ]);

        let aeonTreasuryAmount = '0';
        let suiNsTreasuryAmount = '0';
        let usdcBalanceAmount = '0';
        let nsBalanceAmount = '0';
        let suiBalanceAmount = '0';
        let totalSuiBalanceAmount = '0';

        // Helper function to extract balance
        const extractBalance = (response: any, divisor: number): number => {
          if (response?.data?.content) {
            const content = response.data.content;
            if (content.dataType === 'moveObject' && 'fields' in content) {
              const fields = content.fields as Record<string, any>;
              
              // Check for 'balance' field (original SUI objects)
              if ('balance' in fields) {
                return Number(fields.balance) / divisor;
              }
              
              // Check for 'value' field (dynamic fields)
              if ('value' in fields) {
                return Number(fields.value) / divisor;
              }
            }
          }
          return 0;
        };

        // Parse all objects
        const aeonTreasuryValue = extractBalance(aeonTreasuryResponse, SUI_DIVISOR);
        const suiNsTreasuryValue = extractBalance(suiNsTreasuryResponse, SUI_DIVISOR);
        const usdcBalanceValue = extractBalance(usdcTreasuryResponse, USDC_DIVISOR);
        const nsBalanceValue = extractBalance(nsTreasuryResponse, NS_DIVISOR);
        const suiBalanceValue = extractBalance(suiTreasuryResponse, SUI_DIVISOR);

        // Convert to formatted strings
        aeonTreasuryAmount = aeonTreasuryValue.toLocaleString();
        suiNsTreasuryAmount = suiNsTreasuryValue.toLocaleString();
        usdcBalanceAmount = usdcBalanceValue.toLocaleString();
        nsBalanceAmount = nsBalanceValue.toLocaleString();
        suiBalanceAmount = suiBalanceValue.toLocaleString();

        // Calculate total SUI balance (sum of both treasury accounts)
        const totalSuiBalance = suiNsTreasuryValue + suiBalanceValue;
        totalSuiBalanceAmount = totalSuiBalance.toLocaleString();

        setData({
          aeonTreasury: aeonTreasuryAmount,
          suiNsTreasury: suiNsTreasuryAmount,
          usdcBalance: usdcBalanceAmount,
          nsBalance: nsBalanceAmount,
          suiBalance: suiBalanceAmount,
          totalSuiBalance: totalSuiBalanceAmount,
          loadingData: false,
          error: null,
          // Include the object IDs
          aeonTreasuryId: AEON_TREASURY_OBJECT_ID,
          suiNsTreasuryId: SUINS_TREASURY_OBJECT_ID,
          usdcBalanceId: USDC_TREASURY_OBJECT_ID,
          nsBalanceId: NS_TREASURY_OBJECT_ID,
          suiBalanceId: SUI_TREASURY_OBJECT_ID
        });
      } catch (error) {
        console.error('Error fetching Sui financial data:', error);
        setData(prev => ({
          ...prev,
          loadingData: false,
          error: 'Failed to fetch financial data'
        }));
      }
    }

    // Fetch data immediately on component mount
    fetchData();
    
    // Schedule next update at 12PM UTC
    const initialTimeout = setTimeout(() => {
      fetchData();
      
      // After the initial update at 12PM UTC, set up daily interval
      const dailyInterval = setInterval(fetchData, 24 * 60 * 60 * 1000);
      
      // Clear daily interval on component unmount
      return () => clearInterval(dailyInterval);
    }, getMillisecondsUntil12PMUTC());
    
    // Clear initial timeout on component unmount
    return () => clearTimeout(initialTimeout);
  }, []);

  return data;
}