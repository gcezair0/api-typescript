import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`api ok na porta: http://localhost:${PORT}`);
});