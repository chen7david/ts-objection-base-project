import knex from "knex";
import knexfile from "./knexfile";
const config = knexfile[process.env.NODE_ENV || "development"];

export const store = knex(config);
