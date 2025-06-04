import express from "express";
import filmRouter from "./routes/film_router.js";
import clienteRouter from "./routes/cliente_router.js";
import directorRouter from "./routes/director_router.js";
import syncer from "./database/syncer.js";

if (!await syncer()) {
  process.exit();
}
const app = express();
app.use(express.json());
app.use("/films", filmRouter);
app.use("/clientes", clienteRouter);
app.use("/directors", directorRouter);
app.listen(80, () => {
  console.log("Servidor rodando na porta 80");
});
