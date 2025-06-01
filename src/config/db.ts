import { DataSource } from "typeorm";
import { Pool, QueryResult } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não está definida no arquivo .env");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  },
});

async function testConnection() {
  try {
    const res: QueryResult = await pool.query("SELECT NOW()");
    console.log("Conectado ao banco com sucesso", res.rows[0]);
  } catch (err: any) {
    console.error("Erro ao conectar", err.message);
  }
}

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: ["src/models/**/*.ts"],
  migrations: ["src/migrates/*ts"],
});

async function initializeDatabase() {
  try {
    await AppDataSource.initialize();
    console.log("TypeORM conectado ao banco de dados!");
  } catch (error) {
    console.error("Erro ao conectar o TypeORM ao banco:", error);
  }
}

export { pool, testConnection, initializeDatabase };