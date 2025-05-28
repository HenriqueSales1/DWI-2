import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Cliente = sequelize.define("Cliente", {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING
});

export default Cliente;