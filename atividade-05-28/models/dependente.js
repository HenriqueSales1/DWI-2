import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Dependente = sequelize.define("Dependente", {
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
});

export default Dependente;
