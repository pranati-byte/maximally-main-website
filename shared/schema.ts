import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const hackathons = pgTable("hackathons", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  tagline: text("tagline").notNull(),
  
  // Hero section
  badge_text: text("badge_text"),
  description: text("description").notNull(),
  registration_url: text("registration_url"),
  
  // Fast facts
  start_date: text("start_date").notNull(),
  end_date: text("end_date").notNull(), 
  duration: text("duration").notNull(),
  format: text("format").notNull(),
  team_size: text("team_size").notNull(),
  judging_type: text("judging_type").notNull(),
  results_date: text("results_date").notNull(),
  
  // Content sections
  what_it_is: text("what_it_is").notNull(),
  the_idea: text("the_idea").notNull(),
  
  // Lists (stored as JSON arrays)
  who_joins: jsonb("who_joins").notNull(), // Array of strings
  tech_rules: jsonb("tech_rules").notNull(), // Array of strings
  fun_awards: jsonb("fun_awards").notNull(), // Array of strings
  perks: jsonb("perks").notNull(), // Array of strings
  
  // Prizes
  cash_pool: text("cash_pool"),
  
  // Judging details
  judging_description: text("judging_description").notNull(),
  judging_criteria: text("judging_criteria").notNull(),
  
  // Submission requirements
  required_submissions: jsonb("required_submissions").notNull(), // Array of strings
  optional_submissions: jsonb("optional_submissions"), // Array of strings
  
  // Theme and styling - comprehensive theming system
  theme_config: jsonb("theme_config"), // Complete theme configuration
  theme_color_primary: text("theme_color_primary").notNull(), // Backward compatibility
  theme_color_secondary: text("theme_color_secondary").notNull(),
  theme_color_accent: text("theme_color_accent").notNull(),
  
  // Status
  is_active: boolean("is_active").default(true),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertHackathonSchema = createInsertSchema(hackathons);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertHackathon = z.infer<typeof insertHackathonSchema>;
export type Hackathon = typeof hackathons.$inferSelect;
