import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

// import type { Config } from "drizzle-kit";
// import * as dotenv from "dotenv";

// dotenv.config({
//   path: ".env.local",
// });

// export default {
//   driver: "pg",
//   schema: "./src/lib/db/schema.ts",
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
// } satisfies Config;
