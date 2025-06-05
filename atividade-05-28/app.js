import express from "express";
import filmRouter from "./routes/film_router.js";
import clienteRouter from "./routes/cliente_router.js";
import dependenteRouter from "./routes/dependente_router.js";
import gameRouter from "./routes/game_router.js";
import syncer from "./database/syncer.js";

if (!await syncer()) {
  process.exit();
}
const app = express();
app.use(express.json());
app.use("/films", filmRouter);
app.use("/clientes", clienteRouter);
app.use("/dependentes", dependenteRouter);
app.use("/games", gameRouter);
app.listen(80, () => {
  console.log("Servidor rodando na porta 80");
});
