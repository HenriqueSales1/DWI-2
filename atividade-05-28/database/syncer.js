import Cliente from "../models/cliente.js";
import Film from "../models/film.js";
import Director from "../models/director.js";
import sequelize from "../database/mysql.js";

async function syncer() {
  try {
    await sequelize.authenticate();

    Film.belongsTo(Director);
    Director.hasMany(Film);

    Film.belongsTo(Cliente);
    Cliente.hasMany(Film);

    // Film.belongsToMany(Cliente, { through: "ClienteFilm" });

    await sequelize.sync(); // Use { force: true } to drop and recreate tables
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
  return true;
}

export default syncer;
