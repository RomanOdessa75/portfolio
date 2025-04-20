import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
// const sql = neon(config.env.databaseUrl);

const db = drizzle(sql);
// export const db = drizzle({ client: sql }); -- vercel advice

export { db };
