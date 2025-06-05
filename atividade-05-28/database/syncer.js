import Cliente from "../models/cliente.js";
import Film from "../models/film.js";
import Dependente from "../models/dependente.js";
import Game from "../models/game.js";
import sequelize from "../database/mysql.js";
// import { Model } from "sequelize";

async function syncer() {
  try {
    await sequelize.authenticate();

    Cliente.hasMany(Dependente);
    Film.belongsTo(Cliente);
    Game.belongsTo(Cliente);
    Cliente.hasMany(Film);
    Dependente.belongsTo(Cliente);

    await sequelize.sync(); // Use { force: true } to drop and recreate tables
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
  return true;
}

export default syncer;
