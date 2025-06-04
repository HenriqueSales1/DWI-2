import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Cliente = sequelize.define("Cliente", {
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  telefone: DataTypes.STRING,
  endereco: DataTypes.TEXT,
  data_nascimento: DataTypes.STRING,
});

export default Cliente;
