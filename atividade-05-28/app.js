import express from "express";
import {create} from "express-handlebars";

import film_web_router from "./routes/web/film_router.js";
import clienteRouter from "./routes/api/cliente_router.js";
import dependenteRouter from "./routes/api/dependente_router.js";
import gameRouter from "./routes/api/game_router.js";
import syncer from "./database/syncer.js";

if (!await syncer()) {
  process.exit();
}
const app = express();

const hbs = create({
  extname: ".handlebars",
  defaultLayout: "main",
  layoutsDir: "views/layouts",
  partialsDir: "views/partials",
});

app.use(express.json());
app.use(express.urlencoded());

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/films", film_web_router);
app.use("/clientes", clienteRouter);
app.use("/dependentes", dependenteRouter);
app.use("/games", gameRouter);

app.listen(80, () => {
  console.log("Servidor rodando na porta 80");
});