import express from "express";
import { create } from "express-handlebars";
import session from "express-session";
import css from "connect-session-sequelize";
import cors from "cors";

import film_web_router from "./routes/web/film_router.js";
import cliente_web_router from "./routes/web/cliente_router.js";
import dependente_web_router from "./routes/web/dependente_router.js";
import game_web_router from "./routes/web/game_router.js";
import user_web_router from "./routes/web/user_router.js";

import clienteRouter from "./routes/api/clienteRouter.js";

import syncer from "./database/syncer.js";
import sequelize from "./database/mysql.js";
// import { checkLogged } from "./controllers/web/user_controller.js";

if (!(await syncer())) {
  process.exit();
}

const app = express();

app.use(cors({
  allowOrigin: "*",
  methods: "GET,PUT,POST,DELETE",
}));

const hbs = create({
  extname: ".handlebars",
  defaultLayout: "main",
  layoutsDir: "views/layouts",
  partialsDir: "views/partials",
});

hbs.handlebars.registerHelper("eq", function (arg1, arg2) {
  return arg1 === arg2;
});

hbs.handlebars.registerHelper("inc", function (arg1, arg2) {
  if (typeof arg1 == "undefined") {
    return false;
  }
  return arg1.indexOf(arg2) !== -1;
});

const SequelizeStore = css(session.Store);
const sequelizeStore = new SequelizeStore({
  db: sequelize,
  tableName: "sessions",
  checkExpirationInterval: 5 * 60 * 1000,
  expiration: 1 * 60 * 60 * 1000, // 1 hour
});

app.use(
  session({
    secret: '*&long+and+secure+secret=%445',
    name: "sess_cookie_param",
    store: sequelizeStore,
    cookie: {
      maxAge: 1 * 60 * 60 * 1000, // 1 hour
      secure: false, // true if using https
      httpOnly: true,
    },
    saveUninitialized: false,
    resave: false,
  })
)

await sequelizeStore.sync();

app.use(express.json());
app.use(express.urlencoded());

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/films", film_web_router);
app.use("/clientes", cliente_web_router);
app.use("/dependentes", dependente_web_router);
app.use("/games", game_web_router);
app.use("/users", user_web_router);

app.use("/api/clientes", clienteRouter);

app.listen(80, () => {
  console.log("Servidor rodando na porta 80");
});
