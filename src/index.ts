import app from "./app";
import * as db from './config/db'

const PORT = 3000;

async function startServer() {
  try {
    await db.testConnection();
  } catch (error) {
    console.error("Erro ao inicializar o banco de dados:", error);
    process.exit(1);
  }
}

startServer();

app.listen(PORT, () => {
  console.log(`api ok na porta: http://localhost:${PORT}`);
});