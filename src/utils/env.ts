import { config } from "dotenv";

config();

const DRPC_API_KEY = process.env.DRPC_API_KEY;
if (!DRPC_API_KEY) {
  throw new Error("DRPC_API_KEY is required");
}

export { DRPC_API_KEY };
