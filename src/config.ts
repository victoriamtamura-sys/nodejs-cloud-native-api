import "dotenv/config";
import { z } from "zod";
export const config=z.object({PORT:z.coerce.number().default(3000),DATABASE_URL:z.string().min(1),LOG_LEVEL:z.string().default("info")}).parse(process.env);