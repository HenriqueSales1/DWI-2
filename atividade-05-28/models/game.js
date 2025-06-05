import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Game = sequelize.define("Game", {
    titulo: DataTypes.STRING,
    num_conquistas: DataTypes.INTEGER,
    descricao: DataTypes.TEXT,
    ano_lancamento: DataTypes.INTEGER
});

export default Game;