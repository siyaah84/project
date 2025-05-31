

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
  
    url: "postgresql://neondb_owner:npg_YICQ5ZpgzSm3@ep-quiet-night-a8khgwum-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
});