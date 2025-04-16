import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for SuiNS governance data
  app.get("/api/governance/stats", (req, res) => {
    const stats = {
      activeProposals: 0,
      daoMembers: 0,
      treasuryAmount: "$0",
      implementedProposals: 0
    };
    
    res.json(stats);
  });
  
  app.get("/api/governance/proposals", (req, res) => {
    const proposals = [];
    
    res.json(proposals);
  });

  const httpServer = createServer(app);

  return httpServer;
}
