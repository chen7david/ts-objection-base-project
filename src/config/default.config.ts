import dotenv from "dotenv";
import url from "url";
import { join } from "path";
import { Config } from "./default.interfaces";
const path = (env: string) => join(__dirname, "../..", `.env.${env}`);
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: path(env) });

export const config: Config = {
  server: {
    protocol: process.env.SERVER_PROTOCOL,
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT,
  },
  get serverString(): string {
    return url.format(this.server);
  },
  security: {
    tokenAlgorithm: process.env.TOKEN_ALGORITHM,
    tokenKey: process.env.TOKEN_KEY,
    tokenExpiry: process.env.TOKEN_EXPITY,
    refreshTokenAlgorithm: process.env.REFRESH_TOKEN_ALGORITHM,
    refreshTokenKey: process.env.REFRESH_TOKEN_KEY,
    refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPITY,
  },
  db: {
    client: process.env.DATABASE_CLIENT,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PORT,
  },
};
