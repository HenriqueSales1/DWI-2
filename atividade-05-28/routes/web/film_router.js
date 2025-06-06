import {
  criarFilme,
  editarFilme,
  salvarFilme,
  excluirFilme,
  listarFilmes,
} from "../../controllers/web/film_controller.js";
import { Router } from "express";

const film_web_router = Router();
film_web_router.get("/", listarFilmes);
film_web_router.post("/create", criarFilme);
film_web_router.post("/edit", editarFilme);
film_web_router.post("/save", salvarFilme);
film_web_router.post("/delete", excluirFilme);

export default film_web_router;