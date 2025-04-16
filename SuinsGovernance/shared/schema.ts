import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Base users schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  walletAddress: text("wallet_address"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// SuiNS Governance specific schemas
export const proposals = pgTable("proposals", {
  id: serial("id").primaryKey(),
  proposalId: text("proposal_id").notNull().unique(), // e.g. SIP-27
  title: text("title").notNull(),
  description: text("description").notNull(),
  authorId: integer("author_id").references(() => users.id),
  status: text("status").notNull(), // Active, In Voting, Passed, Rejected, Implemented
  createdAt: timestamp("created_at").defaultNow().notNull(),
  votingStartAt: timestamp("voting_start_at"),
  votingEndAt: timestamp("voting_end_at"),
  implementation: text("implementation"),
  metadata: jsonb("metadata"),
});

export const votes = pgTable("votes", {
  id: serial("id").primaryKey(),
  proposalId: integer("proposal_id").references(() => proposals.id).notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
  vote: text("vote").notNull(), // For, Against, Abstain
  votingPower: integer("voting_power").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const suiNames = pgTable("sui_names", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  ownerId: integer("owner_id").references(() => users.id),
  registeredAt: timestamp("registered_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at"),
  tokenId: text("token_id"),
});

// Insert schemas 
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  walletAddress: true,
});

export const insertProposalSchema = createInsertSchema(proposals).pick({
  proposalId: true,
  title: true,
  description: true,
  authorId: true,
  status: true,
  votingStartAt: true,
  votingEndAt: true,
  implementation: true,
  metadata: true,
});

export const insertVoteSchema = createInsertSchema(votes).pick({
  proposalId: true,
  userId: true,
  vote: true,
  votingPower: true,
});

export const insertSuiNameSchema = createInsertSchema(suiNames).pick({
  name: true,
  ownerId: true,
  expiresAt: true,
  tokenId: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProposal = z.infer<typeof insertProposalSchema>;
export type Proposal = typeof proposals.$inferSelect;

export type InsertVote = z.infer<typeof insertVoteSchema>;
export type Vote = typeof votes.$inferSelect;

export type InsertSuiName = z.infer<typeof insertSuiNameSchema>;
export type SuiName = typeof suiNames.$inferSelect;
