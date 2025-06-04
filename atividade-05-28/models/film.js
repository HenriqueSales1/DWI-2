import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Film = sequelize.define("Film", {
  titulo: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  ano: DataTypes.INTEGER,
});

export default Film;
