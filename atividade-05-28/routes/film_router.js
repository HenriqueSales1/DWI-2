import { criarFilme, editarFilme, excluirFilme, listarFilmes } from "../controllers/film_controller.js";
import { Router } from "express";

const filmRouter = Router();
filmRouter.post("/", criarFilme);
filmRouter.get("/", listarFilmes);
filmRouter.put("/", editarFilme);
filmRouter.delete("/", excluirFilme);

export default filmRouter;