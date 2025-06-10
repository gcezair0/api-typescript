import { DataSource } from "typeorm";
import { Pool, QueryResult } from "pg";
import * as dotenv from "dotenv";

dotenv.config();


const db = [
  "DB_HOST",
  "DB_PORT",
  "DB_USERNAME",
  "DB_PASSWORD",
  "DB_DATABASE"
];

for (const varDb of db) {
  if (!process.env[varDb]) {
    throw new Error(`${varDb} não está definida no arquivo .env`);
  }
}

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5433"),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

async function testConnection() {
  try {
    const res: QueryResult = await pool.query("SELECT NOW()");
    console.log("Conectado ao banco com sucesso", res.rows[0]);
  } catch (err: any) {
    console.error("Erro ao conectar", err.message);
  }
}


export { pool, testConnection };