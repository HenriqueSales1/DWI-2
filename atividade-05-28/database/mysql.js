import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "atividade_05_28",
});

// const sequelize = new Sequelize("postgresql://user_teste_deploy:FrJge8todZ84cvms4ipij3wiDD7rNC6u@dpg-d1f71eur433s7399g41g-a/db_teste_deploy_x53y")

export default sequelize;
